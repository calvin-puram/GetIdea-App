import styles from '@styles/Auth.module.css';

const ValidationError = ({ children }) => {
  return <div className={styles.validateErrors}>{children}</div>;
};

export default ValidationError;
