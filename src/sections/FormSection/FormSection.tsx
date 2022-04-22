import { FormSectionProps } from './FormSection.props';
import styles from './FormSection.module.scss';
import { Container, URLForm } from '../../components';
import { URLFORM_ID } from '../../utils/constans';
import { useAppSelector } from '../../hooks/stateHooks';

export const FormSection = ({ className, ...props }: FormSectionProps) => {
    const urlList = useAppSelector((state) => state.urls.urls)

    return (
        <section id={URLFORM_ID} className={`${styles.formSection} ${className}`} {...props}>
            <Container>
                <URLForm />
                {urlList.map((url) => (
                    <p key={url.code}>{url.long} {url.code}</p>
                ))}
            </Container>
        </section>
    )
}