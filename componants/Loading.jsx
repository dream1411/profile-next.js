import React from 'react';
import styles from '../styles/Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.loadingModal}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading...</p>
        </div>
      );
};

export default Loading;