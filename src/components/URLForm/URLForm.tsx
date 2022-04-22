import { ChangeEvent, FormEvent, useState } from 'react';
import { URLFormProps } from './URLForm.props';
import { Button, Input } from '../';
import styles from './URLForm.module.scss';
import { useAppDispatch } from '../../hooks/stateHooks';
import axios from 'axios';
import { addUrl } from '../../store/reducers/urlReducer';
import {URL_REGEXP} from "../../utils/constans";

export const URLForm = ({ className, ...props }: URLFormProps) => {
    const [value, setValue] = useState<string>('');
    const [isFormValid, setIsFormValid] = useState<boolean>(true);
    const dispatch = useAppDispatch();


    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setIsFormValid(URL_REGEXP.test(e.target.value));
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isFormValid) {
            try {
                const response = await axios.post('https://gotiny.cc/api', { input: value });
                const shortUrlItem = await response.data[0];

                dispatch(addUrl(shortUrlItem));
                setValue('');
            } catch (e) {
                console.log(e)
            }
        }
    }



    return (
        <form  className={`${styles.form} ${className}`} onSubmit={handleSubmit} {...props}>
            <Input
                className={styles.input}
                placeholder='Сократите ссылку здесь...'
                value={value}
                onChange={handleInputChange}
                isValid={isFormValid}
                errorText='Введите ссылку'
            />
            <Button
                className={styles.button}
                type='submit'
                size='big'
                color='green'
                disabled={!isFormValid}
            >Сократить</Button>
        </form>
    )
}