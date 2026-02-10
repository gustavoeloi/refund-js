export interface LoginResponse {
  token: string;
  user: {
    id: string;
    nome: string;
    email: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  role: "manager" | "employee";
  name: string;
}

export interface TokenPayload {
  role: "manager" | "employee";
  sub: string;
  name: string;
  exp: number;
}
