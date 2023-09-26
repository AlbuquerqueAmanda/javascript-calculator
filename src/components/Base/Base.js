import React from 'react';
import styles from './Base.module.css';

function Base({ formula, result }) {
  return (
    <div className={styles.base}>
      <div className={styles.screen}>
        <div className={styles.formulaScreen}>{formula}</div>
        <div className={styles.outputScreen} id="display">{result}</div>
      </div>
      <div className={styles.body}></div>
    </div>
  );
}

export default Base;
