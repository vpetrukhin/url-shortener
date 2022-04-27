import { DetailsHTMLAttributes } from 'react';

export interface LogoProps extends DetailsHTMLAttributes<HTMLImageElement> {
    color: 'dark' | 'white',
}