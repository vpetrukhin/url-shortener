import {FormSection} from '../../sections/';
import styles from './App.module.scss';
import {Footer} from "../Footer/Footer";

export const App = () => {
    return (
        <div className={styles.app}>
            <FormSection />
            <Footer />
        </div>
    );
}
