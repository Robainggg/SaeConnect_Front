import {HttpInterceptorFn, HttpRequest, HttpHandlerFn} from '@angular/common/http';
import { inject } from '@angular/core';
import {AuthService} from "../services/auth.service";

export const JWTInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const authService: AuthService= inject(AuthService);

  const token = authService.getToken();
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  return next(req);
};
