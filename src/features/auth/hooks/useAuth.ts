import { authStore } from "../store/authStore";

export const useAuth = () => {
  return {
    // пользователь
    user: authStore.user,
    
    // статусы
    isAuth: authStore.isAuthenticated,
    isAuthChecked: authStore.isAuthChecked,
    loading: authStore.loading,
    error: authStore.error,
    
    // роли
    isPlatformAdmin: authStore.isPlatformAdmin,
    isServiceAdmin: authStore.isServiceAdmin,
    isRegularUser: authStore.isRegularUser,
    
    // отображаемые данные
    userDisplayName: authStore.userDisplayName,
    userInitials: authStore.userInitials,
    
    // методы
    signIn: authStore.signIn.bind(authStore),
    logout: authStore.logout.bind(authStore),
    refreshTokens: authStore.refreshTokens.bind(authStore),
    verifyToken: authStore.verifyToken.bind(authStore),
  };
};