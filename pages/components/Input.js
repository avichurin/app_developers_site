import React from 'react';

const Input = ({
                   type = 'text',
                   autoFocus = false,
                   autoComplete = 'off',
                   required = false,
                   error = '',
                   ...props
               }) => {
    return (
        <div>
            <input
                type={type}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                required={required}
                {...props}
            />
            {!!error && <span className={styles.error}>{error}</span>}
        </div>
    );
};

export default Input;