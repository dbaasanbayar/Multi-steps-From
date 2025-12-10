export const Input = ({ id, label, placeHolder, isDate, error }) => {
  if (error) {
    return (
      <div className="flex flex-col">
        <label htmlFor={id}>{label}</label>
        <input
          type={isDate ? "date" : "text"}
          placeholder={placeHolder}
          className={` focus:border-red-500 border-4 w-[348px] h-[40px]`}
          id={id}
        />
        <p className="text-red-500">{error}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        type={isDate ? "date" : "text"}
        placeholder={placeHolder}
        className={` focus:border-green-500 border-2 w-[348px] px-2 h-[40px]`}
        id={id}
      />
    </div>
  );
};
