import {ButtonHTMLAttributes, HTMLAttributes} from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
    color?: 'transparent' | 'green';
    size?: 'small' | 'big';
}