import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // ТАК НЕ ДЕЛАТЬ В РЕАЛЬНОМ КОДЕ!
            setTimeout(() => resolve(import('./LoginForm')), 1500);
        })
);
