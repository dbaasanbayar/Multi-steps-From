"use client";
import { useState, useEffect } from "react";
import { StepOne } from "./_components/stepone";
import { StepTwo } from "./_components/steptwo";
import { StepThree } from "./_components/stepthree";
import { AllSet } from "./_components/stepallset";

export default function Page() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    confirmpassword: "",
    dateOfBirth: "",
    profileimage: null,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("formData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setFormData(parsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const CurrentStep = [StepOne, StepTwo, StepThree, AllSet][currentIndex];
  const validate = () => {
    const newErrors = {};
    const data = formData;

    if (currentIndex === 0) {
      if (!data.firstname || !data.firstname.trim()) {
        newErrors.firstname = "First name is required.";
      } else if (data.firstname.length < 2) {
        newErrors.firstname = "First name must be at least 2 characters";
      } else if (data.firstname.length > 50) {
        newErrors.firstname = "First name must be less than 50 characters";
      } else if (!/^[A-Za-z\s-]+$/.test(data.firstname)) {
        newErrors.firstname =
          "First name can only contain letters, spaces, or hyphens.";
      }

      if (!data.lastname || !data.lastname.trim()) {
        newErrors.lastname = "Last name is required.";
      } else if (data.lastname.length < 2) {
        newErrors.lastname = "Last name must be at least 2 characters";
      } else if (data.lastname.length > 50) {
        newErrors.lastname = "Last name must be less than 50 characters";
      } else if (!/^[A-Za-z\s-]+$/.test(data.lastname)) {
        newErrors.lastname =
          "Last name can only contain letters, spaces, or hyphens.";
      } else if (
        data.firstname &&
        data.lastname &&
        data.firstname.trim().toLowerCase() ===
          data.lastname.trim().toLowerCase()
      ) {
        newErrors.lastname = "First name and last name cannot be the same.";
      }

      if (!data.username || !data.username.trim()) {
        newErrors.username = "Username is required.";
      } else if (data.username.length < 3 || data.username.length > 20) {
        newErrors.username = "Username must be 3–20 characters";
      } else if (!/^[A-Za-z\s-]+$/.test(data.username)) {
        newErrors.username =
          "User name can only contain letters, spaces, or hyphens.";
      }
    }

    if (currentIndex === 1) {
      if (!data.email?.trim()) {
        newErrors.email = "Email cannot be empty";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        newErrors.email = "Please provide a valid email address.";
      }

      if (!data.phonenumber || !data.phonenumber.trim()) {
        newErrors.phonenumber = "Phone number is required";
      } else if (!/^\+?[0-9]{8,15}$/.test(data.phonenumber)) {
        newErrors.phonenumber = "Invalid phone number";
      }

      if (!data.password) {
        newErrors.password = "Password is required";
      } else if (data.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters.";
      }

      if (!data.confirmpassword) {
        newErrors.confirmpassword = "Please confirm your password.";
      } else if (data.confirmpassword !== data.password) {
        newErrors.confirmpassword = "Passwords do not match.";
      }
    }

    if (currentIndex === 2) {
      if (!data.dateOfBirth || !data.dateOfBirth.trim()) {
        newErrors.dateOfBirth = "Please select a date.";
      } else {
        const birthDate = new Date(data.dateOfBirth);
        const today = new Date();

        if (birthDate > today) {
          newErrors.dateOfBirth = "Date cannot be in the future.";
        } else {
          let age = today.getFullYear() - birthDate.getFullYear();
          const m = today.getMonth() - birthDate.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
          }
          if (age < 18) {
            newErrors.dateOfBirth = "You must be at least 18 years old.";
          }
        }
      }

      if (!data.profileimage) {
        newErrors.profileimage = "Image cannot be blank";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buttonNext = async (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => Math.min(prev + 1, 3));
      setIsTransitioning(false);
    }, 300);
  };

  function buttonBack() {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
      setIsTransitioning(false);
    }, 300);
  }
  return (
    <div
      className={`flex justify-center h-screen transition-opacity duration-300 ${
        currentIndex === 3 ? "pt-[182px]" : "items-center"
      } ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
      <form action="" onSubmit={buttonNext}>
        <CurrentStep
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          buttonBack={buttonBack}
          handleChange={handleChange}
        />
      </form>
    </div>
  );
}

// {
//     firstname: "",
//     lastname: "",
//     username: "",
//     email: "",
//     phonenumber: "",
//     password: "",
//     confirmpassword: "",
//     dateOfBirth: "",
//     profileimage: null,
//   } -> localStorage object hadgalj chadahguie -> "{firstName:""}"->
