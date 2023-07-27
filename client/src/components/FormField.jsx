import React from 'react'

function FormField({
    labelName,
    type,
    name,
    placeholder,
    value,
    handleChange
}) {
  return (
    <div>
        <div className='flex items-center gap-3 mb-3'>
            <label htmlFor={name} className="block text-sm font-semibold text-[#727171]">
                { labelName }
            </label>
        </div>
        <input
            type={type}
            name={name}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg bg-gray-50 focus:ring-[#6469ff] focus:border-[#6469ff] outline-none w-full p-3"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
        />
    </div>
    
  )
}

export default FormField