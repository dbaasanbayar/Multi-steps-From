import { Input } from "../_components/Input";
import { Button } from "../_components/Button";
export function StepThree({ buttonNext, buttonBack }) {
  return (
    <div className="flex flex-col py-[32px] justify-between items-center w-[480px] rounded-[6px] h-[655px] bg-white border-2">
      <div>
        <div>
          <img src="/logo.png" width={60} height={60} />
          <h1>Join Us! 😎</h1>
          <p>Please provide all current information accurately.</p>
        </div>
        <div>
          <Input
            label={"Date"}
            id={"Date"}
            placeHolder={"Он сар өдөр"}
            isDate={true}
            error={"some error"}
          />
        </div>
      </div>
      <div className="flex">
        <Button buttonBack={buttonBack} isContinue={false} text={"Back"} />
        <Button
          buttonNext={buttonNext}
          isContinue={true}
          text={"Continue 3/3 >"}
        />
      </div>
    </div>
  );
}
