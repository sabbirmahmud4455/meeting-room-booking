import React from 'react';

const Select = ({name, label, id = 'checkbox', errorMessage, children, onChange}) => {
    return (
        <div>
            <label htmlFor={ id?? name} className=" bg-white px-1 font-normal text-muted">
                {label}
            </label>

            <select
                name="name"
                id={id?? name}
                onChange={onChange}
                className="border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 mt-0.5 py-3 px-1"
            >
                {children}
            </select>
            
            {errorMessage && <p className="text-sm font-semibold text-red-600 error">{errorMessage}</p>}
        </div>
    );
}

export default Select;
