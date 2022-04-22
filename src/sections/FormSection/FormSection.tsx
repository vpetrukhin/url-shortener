import { FormSectionProps } from './FormSection.props';
import styles from './FormSection.module.scss';
import {Container, URLForm, URlItem} from '../../components';
import { URLFORM_ID } from '../../utils/constans';
import { useAppSelector } from '../../hooks/stateHooks';

export const FormSection = ({ className, ...props }: FormSectionProps) => {
    const urlList = useAppSelector((state) => state.urls.urls)

    return (
        <section id={URLFORM_ID} className={`${styles.formSection} ${className}`} {...props}>
            <Container>
                <URLForm className={styles.urlForm} />
                <ul className={styles.urlList}>
                    {urlList.map((url) => (
                        <URlItem item={url} key={url.code} />
                    ))}
                </ul>
            </Container>
        </section>
    )
}