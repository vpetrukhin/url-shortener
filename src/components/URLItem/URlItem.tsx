import {URLItemProps} from "./URLItem.props";
import styles from "./URLItem.module.scss";
import {SHORTEN_API_URL} from "../../utils/constans";
import {Button} from "..";
import {useState} from "react";


export const URlItem = ({ item, ...props }: URLItemProps) => {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(`${SHORTEN_API_URL}${item.code}`)
            .then(() => {
                setIsCopied(true);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <li className={styles.url} {...props}>
            <p className={`${styles.urlText}`}>{item.long}</p>
            <p className={`${styles.urlText} ${styles.urlTextColor}`}>{`${SHORTEN_API_URL}${item.code}`}</p>
            <Button
                className={`${styles.button} ${isCopied ? styles.buttonCopied : ''}`}
                color='green'
                onClick={handleCopy}
            >
                {isCopied ? 'Copied!' : 'Copy'}
            </Button>
        </li>
    );
};