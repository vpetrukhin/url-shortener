import { InputProps } from './Input.props';
import styles from './Input.module.scss';


export const Input = ({ errorText = '', isValid, className, ...props }: InputProps) => (
    <div className={`${styles.inputWrapper} ${className}`}>
        <input className={`${styles.input} ${!isValid ? styles.inputError : ''}`} {...props}/>
        {!isValid && (
            <span className={styles.error}>{errorText}</span>
        )}
    </div>
)
