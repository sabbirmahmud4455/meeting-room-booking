import React from 'react';

const Textarea = ({id, name, type, placeholder, children, onChange, errorMessage}) => {
    return (
        <div>
            <label htmlFor={id?? name} className=" bg-white px-1 font-normal text-muted">
                {children}
            </label>
            <textarea
            name="name"
            id={id?? name}
            placeholder={ placeholder}
            onChange={onChange}
                rows="3"
            className="block w-full border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 mt-0.5 p-3"
            ></textarea>

            {errorMessage && <p className="text-sm font-semibold text-red-600 error">{errorMessage}</p>}
        </div>
    );
}

export default Textarea;
