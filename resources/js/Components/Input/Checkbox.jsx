import React from 'react';

const Checkbox = ({name, id = 'checkbox', checked, value, children, onChange}) => {
    return (
        <label className="flex items-center gap-x-2 cursor-pointer">
            <input
                type="checkbox"
                name={name}
                id={id ?? name}
                className="rounded h-4 w-4 text-gray-800"
                checked={checked?? false}
                onChange={onChange}
            />
            <span>{ children }</span>
        </label>
    );
}

export default Checkbox;
