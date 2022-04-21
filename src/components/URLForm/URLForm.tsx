import { FormEvent } from 'react';
import { URLFormProps } from './URLForm.props';
import { Button, Input } from '../';
import styles from './URLForm.module.scss';

export const URLForm = ({ className, ...props }: URLFormProps) => {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('submit');
    }

    return (
        <form  className={`${styles.form} ${className}`} onSubmit={handleSubmit} {...props}>
            <Input className={styles.input} placeholder='Сократите ссылку здесь...'/>
            <Button
                className={styles.button}
                type='submit'
                size='big'
                color='green'
            >Сократить</Button>
        </form>
    )
}