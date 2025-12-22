export function Button({ isContinue, type, text, buttonNext, buttonBack }) {
  if (isContinue) {
    return (
      <button
        type={type}
        onClick={buttonNext}
        className="bg-black w-full cursor-pointer rounded-[6px] flex justify-center items-center h-11 text-white">
        {text}
        {isContinue}
      </button>
    );
  }
  return (
    <button
      onClick={buttonBack}
      className="w-[128px] items-center h-11 border-1 cursor-pointer rounded-[6px] flex justify-center">
      {text}
    </button>
  );
}
