"use client";
import { useState, useEffect } from "react";
import { Header } from "@/app/_components/header";
import { Button } from "../_components/Button";
import { Image } from "lucide-react";
export function StepThree({
  buttonNext,
  buttonBack,
  setFormData,
  formData,
  errors,
}) {
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleFile = (file) => {
    setFormData((prev) => ({ ...prev, profileimage: file }));
    setPreview(URL.createObjectURL(file));
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, profileimage: e.target.files[0] });
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="flex flex-col py-[32px] px-[48px] justify-between items-center w-[480px] rounded h-[655px] bg-white">
      <div>
        <Header />
        <div className="flex gap-1 mt-2 flex-col">
          <div className="flex flex-col gap-1">
            <label className="font-[600] text-[14px]" htmlFor="dateofbirth">
              Date of birth
              {!formData.dateOfBirth && (
                <span className="text-red-500 ml-0.5">*</span>
              )}
            </label>
            <input
              name="dateofbirth"
              id="dateofbirth"
              className={`border px-1 rounded w-[full] h-[40px] focus:outline-none ${
                errors.dateOfBirth
                  ? "border-red-400 focus:ring-red-400"
                  : "focus:border-green-500"
              } `}
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) =>
                setFormData({ ...formData, dateOfBirth: e.target.value })
              }
            />
            {errors.dateOfBirth && (
              <p className="text-red-500 text-[14px]">{errors.dateOfBirth}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className="font-[600] text-[14px]"
              htmlFor="profileimage">
              Profile image
              {!formData.profileimage && (
                <span className="text-red-500 ml-0.5">*</span>
              )}
            </label>
            <label
              htmlFor="profileimage"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`flex flex-col justify-center items-center bg-gray-100 rounded w-full h-[200px] cursor-pointer border transition-all  ${
                errors.profileimage
                  ? "border-red-500"
                  : "border-gray-300 focus:border-green-500"
              } hover:bg-gray-300`}>
              {preview ? (
                <img
                  src={preview}
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <div className="flex flex-col justify-center gap-2 items-center">
                  <Image className="h-[28px] w-[28px]" />
                  <span className="text-[#09090B] text-[14px] font-[500]">
                    Drag or click to upload
                  </span>
                </div>
              )}
              <input
                name="profileimage"
                id="profileimage"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
            {errors.profileimage && (
              <p className="text-red-500 text-[14px] mt-1">
                {errors.profileimage}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center w-full">
        <Button buttonBack={buttonBack} isContinue={false} text={"< Back"} />
        <Button
          buttonNext={buttonNext}
          isContinue={true}
          text={"Continue 3/3 >"}
        />
      </div>
    </div>
  );
}
