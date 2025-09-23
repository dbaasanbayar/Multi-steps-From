export function Button({ isContinue, text, buttonNext, buttonBack }) {
  if (isContinue) {
    return (
      <div
        onClick={buttonNext}
        className="bg-black w-[348px] rounded-[6px] flex justify-center items-center h-11 text-white"
      >
        {text}
        {isContinue}
      </div>
    );
  }
  return (
    <div
      onClick={buttonBack}
      className="w-[128px] h-11 border-2 rounded-[6px] flex justify-center items-center"
    >
      {text}
    </div>
  );
}
