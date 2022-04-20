import { useEffect, useState } from 'react';
import { Button } from '../Butoon/Button';
import { MenuProps } from './Menu.props';
import styles from './Menu.module.scss';

export const Menu = ({ className, ...props }: MenuProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [clienWidth, setClienWidth] = useState(document.documentElement.clientWidth);

    useEffect(() => {
        setClienWidth(document.documentElement.clientWidth)
    }, []);

    const handleClick = () => setIsOpen(prev => !prev);

    return (
        <>
            {clienWidth < 760 
                ? (
                    <>
                        <button className={styles.burger} type='button' onClick={handleClick}>
                            <div className={styles.burgerLine} />
                            <div className={styles.burgerLine} />
                            <div className={styles.burgerLine} />
                        </button>
                        {isOpen && (
                            <div className={`${styles.menu} ${className}`} {...props} >
                                <div className={styles.buttons}>
                                    <Button className={styles.buttonsLogin} color='transparent'>Войти</Button>
                                    <Button color='green'>Регистрация</Button>
                                </div>
                            </div>
                        )}
                    </>
                )
                : (
                    <div className={`${styles.menu} ${className}`} {...props} >
                        <div className={styles.buttons}>
                            <Button color='transparent'>Войти</Button>
                            <Button color='green'>Регистрация</Button>
                        </div>
                    </div>
                )
            }
            
        </>
    )
}