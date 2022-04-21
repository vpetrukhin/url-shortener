import { DetailsHTMLAttributes } from 'react';

export interface InputProps extends DetailsHTMLAttributes<HTMLInputElement> {
    isValid?: boolean;
    errorText?: string;
}