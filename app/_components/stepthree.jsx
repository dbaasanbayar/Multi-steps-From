import { Header } from "@/app/_components/header";
import { Button } from "../_components/Button";
export function StepThree({
  buttonNext,
  buttonBack,
  setFormData,
  formData,
  errors,
}) {
  return (
    <div className="flex flex-col py-[32px] justify-between items-center w-[480px] rounded-[6px] h-[655px] bg-white border-2">
      <div>
        <Header />
        <div className="flex gap-2 flex-col">
          <div className="flex flex-col">
            <label htmlFor="dateofbirth">
              {/* {showAsterisk && <span className="text-red-500 ml-1">*</span>} */}
              Date of birth
            </label>
            <input
              name="dateofbirth"
              id="dateofbirth"
              className={` focus:border-green-500 border-3 rounded w-[348px] h-[40px]`}
              type="date"
              value={setFormData.dateOfBirth}
              onChange={(e) =>
                setFormData({ ...formData, dateOfBirth: e.target.value })
              }
            />
            {errors.dateOfBirth && (
              <p className="text-red-500 text-[14px]">{errors.dateOfBirth}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="profileimage">
              {/* {showAsterisk && <span className="text-red-500 ml-1">*</span>} */}
              Profile image
            </label>
            <input
              name="profileimage"
              id="profileimage"
              className={` focus:border-green-500 border-3 rounded w-[348px] h-[200px]`}
              type="image"
              value={setFormData.profileimage}
              onChange={(e) =>
                setFormData({ ...formData, profileimage: e.target.value })
              }
            />
            {errors.profileimage && (
              <p className="text-red-500 text-[14px]">{errors.profileimage}</p>
            )}
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
