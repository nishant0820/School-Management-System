"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, ChevronDown } from "lucide-react";
import { countries } from "@/countries";
import SubmitButton from "../FormInputs/SubmitButton";

const removeLoadingZero = (phoneNumber: string) => {
  const numberStr = phoneNumber.toString();
  if (numberStr.startsWith("0")) {
    return numberStr.substring(1);
  }
  return numberStr;
};

export type RegisterInputProps = {
  fullName: string;
  email: string;
  password?: string;
  phone: string;
  school: string;
  country: string;
  schoolPage: string;
  students: string;
  role: string;
  social: string;
};

const ContactUs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Find and set initial country to IN (+91)
  const initialCountryCode = "IN";
  const initialCountry = countries.find(
    (item) => item.countryCode === initialCountryCode
  );
  const [phoneCode, setPhoneCode] = useState(initialCountry?.phoneCode || "+91");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputProps>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      school: "",
      country: "",
      schoolPage: "",
      students: "",
      role: "",
      social: "",
    },
  });

  const roles = [
    { label: "Principal/Leadership/Management", value: "Principal" },
    { label: "School Administrator", value: "Administrator" },
    { label: "IT Management", value: "IT" },
    { label: "Teacher/Parent/Student", value: "Teacher" },
    { label: "Consultant/Reseller", value: "Consultant" },
  ];

  async function onSubmit(data: RegisterInputProps) {
    data.phone = removeLoadingZero(data.phone);
    const phoneNumber = `${phoneCode}${data.phone}`;
    console.log(data);
    console.log(phoneNumber);
  }

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl text-center font-semibold">
              Tell us about your institution and requirements
            </h3>
            <p className="text-muted-foreground text-sm text-center px-4 py-2 mb-4 max-w-2xl">
              Our team will reach out within 24 hours to schedule a personalized demo and discuss your specific needs.
            </p>

            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-900">Full Name *</label>
                <input
                  {...register("fullName", { required: "Full name is required" })}
                  type="text"
                  placeholder="John Doe"
                  className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                />
                {errors.fullName && <p className="mt-2 text-sm text-red-600">{errors.fullName.message}</p>}
              </div>

              {/* Email + Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900">Email *</label>
                  <input
                    {...register("email", { required: "Email is required" })}
                    type="email"
                    placeholder="Eg. johndoe@gmail.com"
                    className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-900">Phone *</label>
                  <div className="mt-2 flex rounded-md shadow-sm">
                    {/* Country Code Dropdown */}
                    <div className="relative">
                      <select
                        value={phoneCode}
                        onChange={(e) => setPhoneCode(e.target.value)}
                        className="block rounded-l-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 appearance-none"
                      >
                        {countries.map((c) => (
                          <option key={c.countryCode} value={c.phoneCode}>
                            {c.flag} {c.phoneCode}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
                    </div>

                    {/* Phone Number Input */}
                    <input
                      {...register("phone", { required: "Phone number is required" })}
                      placeholder="Phone number"
                      className="flex-1 block min-w-0 rounded-r-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                    />
                  </div>
                  {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
                </div>
              </div>

              {/* School + Country */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900">School Name *</label>
                  <input
                    {...register("school", { required: "School name is required" })}
                    placeholder="School Name"
                    className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                  />
                  {errors.school && <p className="mt-2 text-sm text-red-600">{errors.school.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900">Country *</label>
                  <div className="relative mt-2">
                    <select
                      {...register("country", { required: "Please select a country" })}
                      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 text-sm shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 appearance-none"
                    >
                      <option value="">Select country</option>
                      {countries.map((c) => (
                        <option key={c.countryCode} value={c.countryCode}>{c.label}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  </div>
                  {errors.country && <p className="mt-2 text-sm text-red-600">{errors.country.message}</p>}
                </div>
              </div>

              {/* Website + Students */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900">School Website *</label>
                  <input
                    {...register("schoolPage", { required: "School website is required" })}
                    placeholder="https://www.school.com"
                    className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                  />
                  {errors.schoolPage && <p className="mt-2 text-sm text-red-600">{errors.schoolPage.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900">Number of Students *</label>
                  <input
                    {...register("students", { required: "Number of students is required" })}
                    type="number"
                    placeholder="300"
                    className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                  />
                  {errors.students && <p className="mt-2 text-sm text-red-600">{errors.students.message}</p>}
                </div>
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm font-medium text-gray-900">Your Role *</label>
                <div className="relative mt-2">
                  <select
                    {...register("role", { required: "Please select a role" })}
                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 text-sm shadow-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 appearance-none"
                  >
                    <option value="">Select role</option>
                    {roles.map((role) => (
                      <option key={role.value} value={role.value}>{role.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                </div>
                {errors.role && <p className="mt-2 text-sm text-red-600">{errors.role.message}</p>}
              </div>

              {/* Social */}
              <div>
                <label className="block text-sm font-medium text-gray-900">How did you hear about us? *</label>
                <input
                  {...register("social", { required: "This field is required" })}
                  placeholder="Social Media"
                  className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100"
                />
                {errors.social && <p className="mt-2 text-sm text-red-600">{errors.social.message}</p>}
              </div>

              {/* Submit */}
              <SubmitButton
                buttonIcon={Send}
                title="Submit"
                loading={isLoading}
                loadingTitle="Sending please wait..."
              />
            </form>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-800 text-white p-6 rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">Speak to someone in sales</h3>
            <p className="text-sm mb-4 py-4">
              To create a more value-added solution, is essential to an analysis of the possibilities of improvement.
            </p>
            <button className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition duration-300">
              Book Appointment
            </button>
          </div>
          <div className="bg-lime-400 p-6 rounded-2xl">
            <h3 className="font-semibold mb-2 text-xl">Contact our team</h3>
            <p className="text-sm mb-4 py-4">
              To create a more value-added solution, is essential to an analysis of the possibilities of improvement.
            </p>
            <button className="bg-green-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300">
              Send a Mail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
