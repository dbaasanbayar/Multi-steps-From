import { Input } from "../_components/Input";
import { Button } from "../_components/Button";
export function StepOne(props) {
  const { buttonNext, required, name, errors } = props;
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
            label={"First name"}
            name={"firstName"}
            {...(required ? { required: true } : {})}
            id={"First name"}
            placeHolder={"Your first name"}
          />
          {errors && <p>{errors}</p>}
          <Input
            label={"Last Name"}
            name="firstName"
            {...(required ? { required: true } : {})}
            id={"Last Name"}
            placeHolder={"Your last name"}        
          />
          <Input
            label={"Username"}
            name="firstName"
            required
            id={"Username"}
            placeHolder={"Your username"}
          />
        </div>
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
