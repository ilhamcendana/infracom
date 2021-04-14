import clsx from 'clsx';
import React from 'react';
import styles from './style.module.scss';
import PropTypes from 'prop-types';
import { LoadingOutlined } from '@ant-design/icons';

const Button = ({ text, variant, className, onClick, isLoading, ...props }) => {
    return (
        <button
            className={clsx(styles.button, styles[variant], 'touchable-opacity', className)}
            onClick={e => {
                e.preventDefault();
                onClick()
            }}
            {...props}>
            {!isLoading ? text :
                <LoadingOutlined />}
        </button>
    );
}

export default Button;

Button.defaultProps = {
    text: 'text',
    variant: 'primary',
    className: '',
    onClick: () => null
}

Button.propTypes = {
    text: PropTypes.string,
    variant: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}