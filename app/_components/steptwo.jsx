import { Header } from "./header";
import { Button } from "../_components/Button";
export function StepTwo({
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
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              className={` focus:border-green-500 border-3 rounded w-[348px] h-[40px]`}
              type="email"
              value={setFormData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-[14px]">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="phonenumber">
              {/* {showAsterisk && <span className="text-red-500 ml-1">*</span>} */}
              Phone number
            </label>
            <input
              name="phonenumber"
              id="phonenumber"
              className={` focus:border-green-500 border-3 rounded w-[348px] h-[40px]`}
              type="number"
              value={setFormData.phonenumber}
              onChange={(e) =>
                setFormData({ ...formData, phonenumber: e.target.value })
              }
            />
            {errors.phonenumber && (
              <p className="text-red-500 text-[14px]">{errors.phonenumber}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">
              {/* {showAsterisk && <span className="text-red-500 ml-1">*</span>} */}
              Password
            </label>
            <input
              name="password"
              id="password"
              className={` focus:border-green-500 border-3 rounded w-[348px] h-[40px]`}
              type="password"
              value={setFormData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {errors.password && (
              <p className="text-red-500 text-[14px]">{errors.password}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmpassword">
              {/* {showAsterisk && <span className="text-red-500 ml-1">*</span>} */}
              Confirm password
            </label>
            <input
              name="confirmpassword"
              id="confirmpassword"
              className={` focus:border-green-500 border-3 rounded w-[348px] h-[40px]`}
              type="password"
              value={setFormData.confirmpassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmpassword: e.target.value })
              }
            />
            {errors.confirmpassword && (
              <p className="text-red-500 text-[14px]">
                {errors.confirmpassword}
              </p>
            )}
          </div>
        </div>
      </div>
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
