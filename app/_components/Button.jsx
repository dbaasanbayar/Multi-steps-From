export function Button({ isContinue, type, text, buttonNext, buttonBack }) {
  if (isContinue) {
    return (
      <button
        type={type}
        onClick={buttonNext}
        className="bg-black w-[348px] cursor-pointer rounded-[6px] flex justify-center items-center h-11 text-white">
        {text}
        {isContinue}
      </button>
    );
  }
  return (
    <button
      onClick={buttonBack}
      className="w-[128px] h-11 border-2 cursor-pointer rounded-[6px] flex justify-center items-center">
      {text}
    </button>
  );
}
