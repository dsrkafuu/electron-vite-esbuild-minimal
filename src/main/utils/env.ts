import electron from 'electron';

export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development' || !electron.app.isPackaged;
}

export function isProduction(): boolean {
  return process.env.NODE_ENV !== 'development' && electron.app.isPackaged;
}
