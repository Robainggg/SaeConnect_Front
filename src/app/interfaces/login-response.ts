export interface LoginResponse {
  userId: number;
  alias: string;
  token: string;
  roleId: number;
  firstname: string;
  lastname: string;
  expires_in: number;
}
