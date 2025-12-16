import { useState } from "react";
import { Button } from "../_components/Button";
import { Header } from "@/app/_components/header";
export function StepOne({ buttonNext, formData, setFormData, errors }) {
  const [showAsterisk, setShowAsterisk] = useState(true);
  return (
    <div className="flex flex-col py-[32px] justify-between items-center w-[480px] rounded-[6px] h-[655px] bg-white border-2">
      <div>
        <Header />
        <div className="flex gap-2 flex-col">
          <div className="flex flex-col justify-center">
            <label htmlFor="firstname">
              First name
              {showAsterisk && <span className="text-red-500 ml-1]">*</span>}
            </label>
            <input
              id="firstname"
              name="firstname"
              className={` focus:border-green-500 border-3 rounded w-[348px] h-[40px]`}
              type="text"
              value={setFormData.firstname}
              onChange={(e) =>
                setFormData({ ...formData, firstname: e.target.value })
              }
            />
            {errors.firstname && (
              <p className="text-red-500 text-[14px]">{errors.firstname}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname">
              {/* {showAsterisk && <span className="text-red-500 ml-1">*</span>} */}
              Last name
            </label>
            <input
              id="lastname"
              name="lastname"
              className={` focus:border-green-500 border-3 rounded w-[348px] h-[40px]`}
              type="text"
              value={setFormData.lastname}
              onChange={(e) =>
                setFormData({ ...formData, lastname: e.target.value })
              }
            />
            {errors.lastname && (
              <p className="text-red-500 text-[14px]">{errors.lastname}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="username">
              {/* {showAsterisk && <span className="text-red-500 ml-1">*</span>} */}
              User name
            </label>
            <input
              name="username"
              id="username"
              className={` focus:border-green-500 border-3 rounded w-[348px] h-[40px]`}
              type="text"
              value={setFormData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            {errors.username && (
              <p className="text-red-500 text-[14px]">{errors.username}</p>
            )}
          </div>
        </div>
      </div>
      <div>
        <Button
          type="submit"
          buttonNext={buttonNext}
          isContinue={true}
          text={"Continue 1/3 >"}
        />
      </div>
    </div>
  );
}
