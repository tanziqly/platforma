import { makeAutoObservable, runInAction } from "mobx";
import { saveTokens, removeTokens, getAccessToken, getRefreshToken, getUserData, isValidToken } from "@features/auth/api/authHelpers";
import type { User, SignInDto, TokenResponse } from "@features/auth/api/types";

class AuthStore {
  user: User | null = null;
  accessToken: string | null = null;
  refreshToken: string | null = null;
  loading = false;
  error: string | null = null;
  isAuthChecked = false;

  constructor() {
    makeAutoObservable(this);
    this.initializeAuth();
  }

  async initializeAuth() {
    console.log('=== initializeAuth вызван ===');
    const token = getAccessToken();
    const refresh = getRefreshToken();
    console.log('Токен из getAccessToken:', token);
    console.log('Refresh token из getRefreshToken:', refresh);
    
    runInAction(() => {
      this.accessToken = token;
      this.refreshToken = refresh;
    });
    
    if (isValidToken(token)) {
      console.log('Токен валиден');
      this.restoreUserFromStorage();
    } else {
      console.log('Токен невалиден или отсутствует');
    }
    
    runInAction(() => {
      this.isAuthChecked = true;
    });
    
    console.log('=== initializeAuth завершен ===');
    console.log('Access Token:', this.accessToken);
    console.log('Refresh Token:', this.refreshToken);
    console.log('Пользователь:', this.user);
    console.log('isAuthChecked:', this.isAuthChecked);
  }

  restoreUserFromStorage() {
    try {
      console.log('=== restoreUserFromStorage вызван ===');
      const userData = getUserData();
      console.log('Данные пользователя из localStorage:', userData);
      
      if (userData) {
        runInAction(() => {
          this.user = userData;
        });
        console.log('Пользователь восстановлен из localStorage');
      } else {
        console.log('Пользователь не найден в localStorage');
        
        console.log('Все ключи в localStorage:');
        for (const key of Object.keys(localStorage)) {
          console.log(`Ключ: ${key}, Значение: ${localStorage.getItem(key)}`);
        }
      }
    } catch (e) {
      console.log('Ошибка восстановления пользователя:', e);
    }
  }

  async signIn(dto: SignInDto) {
    this.loading = true;
    this.error = null;
    
    try {
      const { api } = await import("@shared/api/axios");
      console.log('=== Отправка запроса на вход ===');
      console.log('Данные:', dto);

      const requestData = {
        username: dto.username,
        password: dto.password,
      };

      console.log('Отправляемые данные:', requestData);

      const response = await api.post<TokenResponse>("/api/token/", requestData);
      const data = response.data;
      
      console.log('=== Ответ от сервера ===');
      console.log('Данные:', data);

      if (!data.access) {
        throw new Error('Сервер не вернул access token');
      }

      console.log('Полученный access token:', data.access.substring(0, 20) + '...');

      const userResponse = await api.get<User>("/api/users/me/", {
        headers: {
          Authorization: `Bearer ${data.access}`
        }
      });

      const userData = userResponse.data;
      console.log('Данные пользователя:', userData);

      runInAction(() => {
        this.user = userData;
        this.accessToken = data.access;
        this.refreshToken = data.refresh;
      });

      saveTokens(data.access, data.refresh, userData);
      
      console.log('Токены и данные пользователя сохранены');
      
      runInAction(() => {
        this.isAuthChecked = true;
      });
      
      return true;
    } catch (e: any) {
      console.error('=== Ошибка входа ===', e);
      console.error('Детали ошибки:', e.response?.data);
      
      runInAction(() => {
        this.error = e.response?.data?.detail || e.response?.data?.message || e.message || "Ошибка входа";
      });
      return false;
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async refreshTokens() {
    try {
      const refreshToken = getRefreshToken();
      if (!refreshToken) {
        throw new Error('Refresh token не найден');
      }

      const { api } = await import("@shared/api/axios");
      const response = await api.post<TokenResponse>("/api/token/refresh/", {
        refresh: refreshToken
      });

      const data = response.data;

      runInAction(() => {
        this.accessToken = data.access;
      });

      saveTokens(data.access, refreshToken, this.user);
      
      return data.access;
    } catch (e: any) {
      console.error('Ошибка обновления токена:', e);
      this.logout();
      throw e;
    }
  }

  async verifyToken() {
    try {
      const token = getAccessToken();
      if (!token) {
        return false;
      }

      const { api } = await import("@shared/api/axios");
      await api.post("/api/token/verify/", {
        token: token
      });

      return true;
    } catch (e) {
      console.error('Токен невалиден:', e);
      return false;
    }
  }

  logout() {
    console.log('=== logout вызван ===');
    runInAction(() => {
      this.user = null;
      this.accessToken = null;
      this.refreshToken = null;
      this.isAuthChecked = true;
      this.error = null;
    });
    removeTokens();
  }

  get isAuthenticated() {
    return isValidToken(this.accessToken) && !!this.user;
  }

  get userDisplayName() {
    return this.user?.full_name || this.user?.username || "";
  }

  get userInitials() {
    if (!this.user?.full_name) return this.user?.username?.slice(0, 2).toUpperCase() || "";
    return this.user.full_name
      .split(" ")
      .map((part) => part[0]?.toUpperCase() || "")
      .join("")
      .slice(0, 2);
  }

  get isPlatformAdmin() {
    return this.user?.role === 'platform_admin';
  }

  get isServiceAdmin() {
    return this.user?.role === 'service_admin';
  }

  get isRegularUser() {
    return this.user?.role === 'user';
  }
}

export const authStore = new AuthStore();