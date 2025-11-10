import type { User } from "@features/auth/api/types";

const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';
const USER_DATA_KEY = 'userData';

export const saveTokens = (accessToken: string, refreshToken: string, user?: User | null) => {
  if (!accessToken || accessToken === 'undefined' || accessToken === 'null') {
    console.error('Попытка сохранить невалидный access token');
    return;
  }
  
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  
  if (refreshToken && refreshToken !== 'undefined' && refreshToken !== 'null') {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }
  
  // Сохраняем пользователя если передан и не null
  if (user) {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
  }
  
  console.log('Токены и пользователь сохранены');
};

export const getAccessToken = (): string | null => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  
  if (!token || token === 'undefined' || token === 'null') {
    console.log('Access token не найден или невалиден');
    return null;
  }
  
  return token;
};

export const getRefreshToken = (): string | null => {
  const token = localStorage.getItem(REFRESH_TOKEN_KEY);
  
  if (!token || token === 'undefined' || token === 'null') {
    console.log('Refresh token не найден или невалиден');
    return null;
  }
  
  return token;
};

export const getUserData = (): User | null => {
  try {
    const userData = localStorage.getItem(USER_DATA_KEY);
    
    if (!userData || userData === 'undefined' || userData === 'null') {
      console.log('Данные пользователя не найдены');
      return null;
    }
    
    return JSON.parse(userData);
  } catch (error) {
    console.error('Ошибка при получении данных пользователя:', error);
    return null;
  }
};

export const removeTokens = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(USER_DATA_KEY);
  console.log('Токены и данные пользователя удалены');
};

export const isValidToken = (token: string | null): boolean => {
  if (!token) return false;
  if (token === 'undefined') return false;
  if (token === 'null') return false;
  if (token.length < 10) return false;
  return true;
};

export const updateUserData = (user: Partial<User>) => {
  try {
    const currentUser = getUserData();
    if (currentUser) {
      const updatedUser = { ...currentUser, ...user };
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(updatedUser));
      console.log('Данные пользователя обновлены');
    }
  } catch (error) {
    console.error('Ошибка при обновлении данных пользователя:', error);
  }
};