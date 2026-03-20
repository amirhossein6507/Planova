function Selecte({ title, children, onGetValue }) {
  return (
    <select
      className="w-full bg-violet-100 rounded-2xl text-violet-900 pr-8 py-1.5 outline-none hover:pr-12 focus:pr-12
      transition-all duration-300 select"
      onChange={(e) => onGetValue(e.target.value)}
    >
      {title && (
        <option selected className="bg-violet-600 text-violet-100">
          {title}
        </option>
      )}
      {children}
    </select>
  );
}

function Option({ children, value }) {
  return <option value={value}>{children}</option>;
}

export { Selecte, Option };
