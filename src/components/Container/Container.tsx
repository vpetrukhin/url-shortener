import styles from './Container.module.scss';
import { ContainerProps } from './Container.props';

export const Container = ({ className, children, ...props }: ContainerProps) => {
    return (
        <div className={`${styles.container} ${className}`} {...props}>
            {children}
        </div>
    )
}