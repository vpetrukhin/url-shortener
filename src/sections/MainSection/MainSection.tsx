import { MainSectionProps } from './MainSection.props';

import styles from './MainSection.module.scss';
import { Container, Logo } from '../../components';

export const MainSection = ({ className, ...props }: MainSectionProps) => {
    return (
        <section className={`${styles.mainSection} ${className}`} {...props}>
            <Container>
                <header className={styles.header}>
                    <Logo color='dark' />
                </header>
            </Container>
        </section>
    )
}