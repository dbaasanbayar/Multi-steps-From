import { Input } from "../_components/Input";
import { Button } from "../_components/Button";
export function StepTwo({ buttonBack, buttonNext, text, isContinue }) {
  return (
    <div>
      <div>
        <img src="/logo.png" width={60} height={60} />
        <h1>Join Us! 😎</h1>
        <p>Please provide all current information accurately.</p>
      </div>
      <Input label={"Email"} id={"Email"} placeHolder={" Таны нэр"} />
      <Input
        label={"Phone number"}
        id={"First Name"}
        placeHolder={" Таны нэр"}
      />
      <Input label={"Password"} id={"First Name"} placeHolder={" Таны нэр"} />
      <Input
        label={"Confirm password"}
        id={"First Name"}
        placeHolder={" Таны нэр"}
      />
      <div className="flex">
        <Button buttonBack={buttonBack} isContinue={false} text={"Back"} />
        <Button
          buttonNext={buttonNext}
          isContinue={true}
          text={"Continue 2/3 >"}
        />
      </div>
    </div>
  );
}
