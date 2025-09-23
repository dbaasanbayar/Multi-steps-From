import { Input } from "../_components/Input";
import { Button } from "../_components/Button";
export function StepThree(buttonNext) {
  return (
    <div>
      <Input
        label={"Date"}
        id={"Date"}
        placeHolder={" Он сар өдөр"}
        isDate={true}
        error={"some error"}
      />
      <Button
        buttonNext={buttonNext}
        isContinue={true}
        text={"Continue 3/3 >"}
      />
    </div>
  );
}
