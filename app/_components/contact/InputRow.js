function InputRow({ placeholder, name, value, handle }) {
  return (
    <div className="space-y-2 border border-metric">
      <input
        required
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handle}
        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 placeholder-metric"
      />
    </div>
  );
}

export default InputRow;
