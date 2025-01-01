import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let authReq = req;
  let token: string | null = null;

  if (typeof window !== 'undefined') {
    // Check if the code is running in the browser
    token = localStorage.getItem('userToken');
  } 
  const newReq = req.clone(
    { setHeaders: { Authorization: `Bearer ${token}` } }
  );
  return next(newReq);
};
