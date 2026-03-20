function Form({ children, title, className, onSubmit }) {
  return (
    <form
      className={`space-y-4 w-96 min-w-40  shadow rounded-3xl px-3 pb-7 pt-5 text-violet-100 bg-linear-60 from-violet-500 to-sky-400 ${className ? className : ""}`}
      onSubmit={onSubmit}
    >
      {title && (
        <h2 className="font-bold pr-3 pl-2 py-0.5 text-[18px] border-r-4 text-violet-500 border-violet-500 bg-violet-100 w-fit">
          {title}
        </h2>
      )}
      {children}
    </form>
  );
}

export default Form;
