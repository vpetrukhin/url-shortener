import { FormSection, MainSection } from '../../sections/';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <MainSection />
      <FormSection />
    </div>
  );
}
