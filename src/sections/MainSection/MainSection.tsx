import { MainSectionProps } from './MainSection.props';

import { Button, Container, Logo } from '../../components';
import styles from './MainSection.module.scss';

export const MainSection = ({ className, ...props }: MainSectionProps) => {
    return (
        <section className={`${styles.mainSection} ${className}`} {...props}>
            <Container>
                <header className={styles.header}>
                    <Logo color='dark' />
                    {/* <Menu /> */}
                </header>
                    <div className={styles.offer}>
                        <h1 className={styles.offerTitle}>Больше, чем просто короткие ссылки</h1>
                        <p className={styles.offerText}>
                            Повышайте узнаваемость своего бренда и получайте подробные сведения о том, как работают ваши ссылки.
                        </p>
                        <Button color='green' size='big'>Начать</Button>
                    </div>
            </Container>
        </section>
    )
}