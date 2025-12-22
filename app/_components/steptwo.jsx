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
    <div className="flex flex-col py-[32px] px-[48px] justify-between items-center w-[480px] rounded h-[655px] bg-white">
      <div>
        <Header />
        <div className="flex gap-1 mt-2 flex-col">
          <div className="flex flex-col gap-1">
            <label className="font-[600] text-[14px]" htmlFor="email">
              Email
              {!formData.email && (
                <span className="text-red-500 ml-0.5">*</span>
              )}
            </label>
            <input
              id="email"
              name="email"
              className={`border px-1 rounded w-[full] h-[40px] focus:outline-none ${
                errors.email
                  ? "border-red-400 focus:ring-red-400"
                  : "focus:border-green-500"
              } `}
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-[14px]">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-[600] text-[14px]" htmlFor="phonenumber">
              Phone number
              {!formData.phonenumber && (
                <span className="text-red-500 ml-0.5">*</span>
              )}
            </label>
            <input
              name="phonenumber"
              id="phonenumber"
              className={`border px-1 rounded w-[full] h-[40px] focus:outline-none ${
                errors.phonenumber
                  ? "border-red-400 focus:ring-red-400"
                  : "focus:border-green-500"
              } `}
              type="number"
              value={formData.phonenumber}
              onChange={(e) =>
                setFormData({ ...formData, phonenumber: e.target.value })
              }
            />
            {errors.phonenumber && (
              <p className="text-red-500 text-[14px]">{errors.phonenumber}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-[600] text-[14px]" htmlFor="password">
              Password
              {!formData.password && (
                <span className="text-red-500 ml-0.5">*</span>
              )}
            </label>
            <input
              name="password"
              id="password"
              className={`border px-1 rounded w-[full] h-[40px] focus:outline-none ${
                errors.password
                  ? "border-red-400 focus:ring-red-400"
                  : "focus:border-green-500"
              } `}
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {errors.password && (
              <p className="text-red-500 text-[14px]">{errors.password}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-[600] text-[14px]" htmlFor="confirmpassword">
              Confirm password
              {!formData.confirmpassword && (
                <span className="text-red-500 ml-0.5">*</span>
              )}
            </label>
            <input
              name="confirmpassword"
              id="confirmpassword"
              className={`border px-1 rounded w-[full] h-[40px] focus:outline-none ${
                errors.confirmpassword
                  ? "border-red-400 focus:ring-red-400"
                  : "focus:border-green-500"
              } `}
              type="password"
              value={formData.confirmpassword}
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
      <div className="flex gap-4 w-full">
        <Button buttonBack={buttonBack} isContinue={false} text={"< Back"} />
        <Button
          buttonNext={buttonNext}
          isContinue={true}
          text={"Continue 2/3 >"}
        />
      </div>
    </div>
  );
}
