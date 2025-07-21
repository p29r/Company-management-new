import { HttpInterceptorFn } from '@angular/common/http';

export const addHeaderInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const token = localStorage.getItem('JWTToken');
    const newReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Origin': "*"
      }
    });
  return next(newReq);
};
