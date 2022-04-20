import { DetailsHTMLAttributes } from 'react';

export interface ButtonProps extends DetailsHTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
    color?: 'transparent' | 'green';
    size?: 'small' | 'big';
}