import { Input } from "../_components/Input";
import { Button } from "../_components/Button";
export function StepOne({ buttonNext }) {
  return (
    <div>
      <div>
        <img src="/logo.png" width={60} height={60} />
        <h1>Join Us! 😎</h1>
        <p>Please provide all current information accurately.</p>
      </div>
      <div>
        <Input
          label={"First Name"}
          id={"First Name"}
          placeHolder={" Your first name"}
        />
        <Input
          label={"Last Name"}
          id={"Last Name"}
          placeHolder={" Your last name"}
        />
        <Input
          label={"Username"}
          id={"Username"}
          placeHolder={" Your username"}
        />
      </div>
      <div>
        <Button
          buttonNext={buttonNext}
          isContinue={true}
          text={"Continue 1/3 >"}
        />
      </div>
    </div>
  );
}
