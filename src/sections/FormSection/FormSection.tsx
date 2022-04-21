import { FormSectionProps } from './FormSection.props';
import styles from './FormSection.module.scss';
import { Container, URLForm } from '../../components';
import { URLFORM_ID } from '../../utils/constans';

export const FormSection = ({ className, ...props }: FormSectionProps) => {
    return (
        <section id={URLFORM_ID} className={`${styles.formSection} ${className}`} {...props}>
            <Container>
                <URLForm />
            </Container>
        </section>
    )
}