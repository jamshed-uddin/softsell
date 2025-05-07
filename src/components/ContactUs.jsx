"use client";

import React from "react";
import SectionTitle from "./SectionTitle";
import { useForm } from "react-hook-form";
import Button from "./Button";

export const formFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Your full name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    required: true,
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    placeholder: "Company name",
    required: true,
  },
  {
    name: "licenseType",
    label: "License Type",
    type: "select",
    options: [
      { value: "", label: "Select a license" },
      { value: "windows", label: "Windows" },
      { value: "office", label: "Microsoft Office" },
      { value: "adobe", label: "Adobe Suite" },
      { value: "other", label: "Other" },
    ],
    required: true,
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Your message...",
    required: true,
  },
];

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div id="contact-us" className="scroll-mt-20">
      <SectionTitle>Contact us</SectionTitle>

      <div className="mt-14">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          {formFields.map((field) => (
            <div
              key={field.name}
              className={`${field.type === "textarea" ? "lg:col-span-2" : ""}`}
            >
              <label
                htmlFor={field.name}
                className="block text-sm font-medium mb-1"
              >
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  rows="4"
                  className="w-full border rounded-lg p-2 outline-none"
                  {...register(field.name, { required: field.required })}
                />
              ) : field.type === "select" ? (
                <select
                  id={field.name}
                  className="w-full border rounded-lg p-2 outline-none bg-black text-white"
                  {...register(field.name, { required: field.required })}
                >
                  {field.options.map((option, idx) => (
                    <option key={idx} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  className="w-full border rounded-lg p-2 outline-none"
                  id="name"
                  type={field.type}
                  {...register(field.name, { required: field.required })}
                />
              )}
              {errors[field.name] && (
                <span className="text-sm text-red-500">{`${field.name} is required`}</span>
              )}
            </div>
          ))}

          <div className={"lg:col-start-2 w-full flex justify-end"}>
            <Button type="submit" className="w-1/2">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
