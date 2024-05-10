"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import sendEmail from "../Contact/emailAPI";
import "react-toastify/ReactToastify.css";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
    services: [],
  });
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleServiceToggle = (service) => {
    setFormData((prevData) => {
      const updatedServices = prevData.services.includes(service)
        ? prevData.services.filter((item) => item !== service)
        : [...prevData.services, service];

      return {
        ...prevData,
        services: updatedServices,
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.services.length === 0) {
      toast.error("Please select at least one service.");
      return; // Prevent form submission if no service is selected
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      message: "",
      services: [],
    });

    console.log("this is form Data", formData);

    sendEmail({
      from_email: "marketing@prometheus.ph",
      from_name: "Prometheus",
      to_name: formData.firstName + " " + formData.lastName,
      user_email: formData.email,
      number: formData.number,
      message: `
        First Name: ${formData.firstName}  \n
        Last Name: ${formData.lastName}  \n
        Number:  ${formData.number}  \n
        Services Selected: \n
        ${formData.services.map((service) => {
          return `${service}`;
        })}. \n
        Message: ${formData.message} 
      `,
    });

    toast.success("Email has been sent!");
  };

  const onRecaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
    setIsCaptchaVerified(true);
  };

  return (
    <div>
      <div className="relative">
        <ToastContainer />
      </div>

      <div className="relative flex flex-col justify-center items-center text-center mx-5 mb-36 mt-12">
        <div className="hidden md:block md:w-4/5 mb-2">
          <img className="ml-5 h-6" src="/ContactAssets/vector.png" alt="" />
        </div>
        <div className="w-full md:w-4/5 border-2 border-white rounded-xl mx-20 p-4 bg-[#1B1A1A] flex flex-col justify-center items-center text-center opacity-75 ">
          <h1 className="text-4xl text-white font-ox font-black mt-3">
            This is your ticket to greater heights.
          </h1>

          <div className="flex flex-row font-md text-md lg:text-lg xl:text-xl space-x-4 text-gray-500 px-10 mt-3">
            Kick your brand into hyperdrive with the best minds and tools at
            your disposal. We&apos;re aiming for greatness.
          </div>
          <div className="w-4/5 border-b-2 h-2 flex-grow mt-5 px-10 border-customOrange hidden sm:flex"></div>
          <div className="md:flex flex-row w-full md:space-x-10 m-10 ">
            <div className="hidden md:flex-1 md:flex justify-center items-center">
              <motion.img
                className="w-96 "
                src="/AboutAssets/circle_logo.webp"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>

            <div className="w-full flex-1 flex flex-col text-left space-y-5 text-white font-ox font-black">
              <form
                onSubmit={handleSubmit}
                className="space-y-4 w-full p-10 text-[#C8C0B5] text-left "
              >
                <div className="flex flex-col md:flex-col">
                  <div className="flex-1 flex flex-col md:flex-col justify-center w-full space-y-5 font-ox">
                    <div className="w-full">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium  font-ox"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Peter"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full bg-[#3A3737] rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                        required
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium font-ox"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        placeholder="Weyland"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full rounded-md bg-[#3A3737] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="number"
                        className="block text-sm font-medium font-ox"
                      >
                        Contact Number
                      </label>
                      <input
                        type="text"
                        id="number"
                        placeholder="Enter your contact number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        pattern="[0-9]{11}"
                        title="Please enter a 11-digit phone number e.g. (09123456789)"
                        className="mt-1 p-2 block w-full rounded-md bg-[#3A3737] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium  font-ox"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="peterweyland@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full rounded-md bg-[#3A3737] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <label
                      htmlFor="services"
                      className="block text-sm font-medium font-ox"
                    >
                      Select Services:
                    </label>
                    <div className="flex flex-col">
                      {[
                        "Strategy",
                        "Creative",
                        "Branding",
                        "Digital Marketing",
                        "Media",
                        "Social Media",
                        "Event Management",
                        "Software Solutions",
                        "Wedding Studio",
                      ].map((service) => (
                        <div key={service} className="flex items-center">
                          <input
                            type="checkbox"
                            id={service}
                            name="services"
                            value={service}
                            checked={formData.services.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="mr-2"
                          />
                          <label htmlFor={service}>{service}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 mt-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium  font-ox"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      placeholder="Tell us your story or ask us anything!"
                      onChange={handleChange}
                      className="mt-1 p-2 block w-full  rounded-md bg-[#3A3737] border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                      rows="6"
                      required
                    />
                  </div>
                </div>

                {/* <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onRecaptchaChange}
              /> */}
                <div className="flex justify-center md:justify-end">
                  <button
                    type="submit"
                    className="py-3 px-6 bg-[#3A3737] hover:bg-gray-700 font-black rounded-md focus:outline-none focus:ring focus:ring-indigo-200"

                    // disabled={!isCaptchaVerified}
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
