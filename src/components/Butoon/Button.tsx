import { ButtonProps } from './Button.props';

import styles from './Button.module.scss';

export const Button = ({ children, className, color = 'transparent', size = 'small', ...props }: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${className} ${
                color === 'green'
                    ? styles.buttonGreen
                    : styles.buttonTransparent
                } ${
                size === 'big'
                    ? styles.buttonBig
                    : ''
                }`}
            {...props}
        >{children}</button>
    )
}