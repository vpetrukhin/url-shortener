import {FooterProps} from "./Footer.props";
import styles from "./Footer.module.scss";
import {Container} from "../Container/Container";


export const Footer = ({className, ...props}: FooterProps) => {
    return (
        <footer className={`${styles.footer} ${className}`} {...props}>
            <Container className={styles.footerInner}>
                <p className={styles.footerText}>
                    &copy;<a className={styles.footerLink} href='https://github.com/vpetrukhin' target='_blanc' title='Github'>Василий Петрухин</a>
                </p>
                <p className={styles.footerText}>
                    Сделано с использованием <a className={styles.footerLink} href='https://github.com/robvanbakel/gotiny-api' target='_blanc' title='GoTiny API'>GoTiny API</a>
                </p>
            </Container>
        </footer>
    )
}