import React, { FC } from 'react';
import styles from '@styles/Auth.module.css';

type ErrorInputProps = {
  children: JSX.Element | JSX.Element[];
  component: any;
};

const ValidationError: FC<ErrorInputProps> = ({ children }) => {
  return <div className={styles.validateErrors}>{children}</div>;
};

export default ValidationError;
