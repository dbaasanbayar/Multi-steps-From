import { useState } from "react";
import { Button } from "../_components/Button";
import { Header } from "@/app/_components/header";
export function StepOne({
  buttonNext,
  formData,
  setFormData,
  handleChange,
  errors,
}) {
  return (
    <div className="flex flex-col py-[32px] px-[48px] justify-between items-center w-[480px] rounded h-[655px] bg-white">
      <div>
        <Header />
        <div className="flex gap-1 mt-2 flex-col">
          <div className="flex flex-col gap-1">
            <label className="font-[600] text-[14px]" htmlFor="firstname">
              First name
              {!formData.firstname && (
                <span className="text-red-500 ml-0.5">*</span>
              )}
            </label>
            <input
              id="firstname"
              name="firstname"
              className={`border px-1 rounded w-[full] h-[40px] focus:outline-none ${
                errors.firstname
                  ? "border-red-400 focus:ring-red-400"
                  : "focus:border-green-500"
              } `}
              type="text"
              value={formData.firstname}
              onChange={handleChange}
            />
            {errors.firstname && (
              <p className="text-red-500 text-[14px]">{errors.firstname}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-[600] text-[14px]" htmlFor="lastname">
              Last name
              {!formData.lastname && (
                <span className="text-red-500 ml-0.5">*</span>
              )}
            </label>
            <input
              id="lastname"
              name="lastname"
              className={`border px-1 rounded w-[full] h-[40px] focus:outline-none ${
                errors.lastname
                  ? "border-red-400 focus:ring-red-400"
                  : "focus:border-green-500"
              } `}
              type="text"
              value={formData.lastname}
              onChange={handleChange}
            />
            {errors.lastname && (
              <p className="text-red-500 text-[14px]">{errors.lastname}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-[600] text-[14px]" htmlFor="username">
              User name
              {!formData.username && (
                <span className="text-red-500 ml-0.5">*</span>
              )}
            </label>
            <input
              name="username"
              id="username"
              className={`border px-1 rounded w-[full] h-[40px] focus:outline-none ${
                errors.username
                  ? "border-red-400 focus:ring-red-400"
                  : "focus:border-green-500"
              } `}
              type="text"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <p className="text-red-500 text-[14px]">{errors.username}</p>
            )}
          </div>
        </div>
      </div>
      <div className="w-full">
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
