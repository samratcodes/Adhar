/* eslint-disable react/prop-types */
export default function FormInput({
  type,
  name,
  value,
  handleChange,
  placeholder,
  required,
}) {
  return (
    <div className="mb-6">
      {type !== "file" ? (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
          required={required}
        />
      ) : (
        <div className="flex flex-col text-gray-700">
          <label htmlFor={name} className="mb-2 text-lg font-medium">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </label>
          <input
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out"
            required={required}
          />
        </div>
      )}
    </div>
  );
}
