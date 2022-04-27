import { LogoProps } from './Logo.props';
import logoDark from './logoDark.svg';
import logoWhite from './logoWhite.svg';
import styles from './Logo.module.scss';

export const Logo = ({ color, ...props }: LogoProps) => {
    return (
        <img
            className={styles.logo}
            alt='logo'
            src={color === 'white' ? logoWhite : logoDark}
            {...props}
        />
    )
}