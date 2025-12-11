import { Input } from "../_components/Input";
import { Button } from "../_components/Button";
export function StepThree({buttonNext, buttonBack}) {
  // const showAsterisk = !value;
  return (
    <div className="flex flex-col py-[32px] justify-between items-center w-[480px] rounded-[6px] h-[655px] bg-white border-2">
        <div>
        <div>
          <img src="/logo.png" width={60} height={60} />
          <h1>Join Us! 😎</h1>
          <p>Please provide all current information accurately.</p>
        </div>
        <div className="flex gap-2 flex-col">
          <div className="flex flex-col">
            <label htmlFor="dateofbirth">
              {/* {showAsterisk && <span className="text-red-500 ml-1">*</span>} */}
              Date of birth
            </label>
            <input id="dateofbirth"
            className={` focus:border-green-500 border-3 rounded w-[348px] h-[40px]`} 
            type="date" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="profileimage">
              {/* {showAsterisk && <span className="text-red-500 ml-1">*</span>} */}
              Profile image
            </label>
            <input id="profileimage"
            className={` focus:border-green-500 border-3 rounded w-[348px] h-[40px]`} 
            type="image" />
          </div>
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
