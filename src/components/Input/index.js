import React from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';

const Input = ({ placeholder, type, onChange, className ,...props}) => {
    return (
        <input
            className={clsx(styles.input, className)}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            {...props}
        />
    );
}

export default Input;