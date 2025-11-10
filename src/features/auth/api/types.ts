export interface SignInDto {
  username: string;
  password: string;
}

export interface SignUpDto {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  url: string;
  client_id: string;
  client_secret: string;
  created_by: number;
  created_by_email: string;
  is_active: boolean;
  created_at: string;
}

export interface Application {
  id: number;
  user: number;
  user_email: string;
  service: number;
  service_name: string;
  service_url: string;
  message: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  processed_at: string | null;
  processed_by: number | null;
}

export interface CreateServiceDto {
  name: string;
  description: string;
  url: string;
}

export interface CreateApplicationDto {
  message: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  patronymic?: string;
  phone_number?: string;
  bio?: string;
  city?: string;
  date_of_birth?: string;
  full_name: string;
  role: string;
  created_at: string;
}

export interface AuthResponse {
  message: string;
  status: string;
  tokens: {
    access_token: string;
    refresh_token: string;
  };
  user: User;
}

export interface TokenResponse {
  access: string;
  refresh: string;
}

export interface RefreshTokenDto {
  refresh: string;
}

export interface VerifyTokenDto {
  token: string;
}