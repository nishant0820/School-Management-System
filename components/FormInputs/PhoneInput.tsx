"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleHelp } from "lucide-react";
import Select from "react-tailwindcss-select";
import { countries } from "@/countries";

type TextInputProps = {
  register: any;
  errors: any;
  label: string;
  name: string;
  toolTipText?: string;
  placeholder?: string;
};

export default function PhoneInput({
  register,
  errors,
  label,
  name,
  toolTipText,
  placeholder,
}: TextInputProps) {
  const initialCountryCode = "IN";
  const modifiedCountries = countries.map((country) => {
    return {
      value: country.value,
      label: `${country.countryCode} ${country.phoneCode}`,
      phoneCode: country.phoneCode,
      currencyCode: country.currencyCode,
      countryCode: country.countryCode,
      flag: country.flag,
    };
  });
  const initialCountry = modifiedCountries.find(
    (item) => item.countryCode === initialCountryCode
  );
  const [selectedCountry, setSelectedCountry] = useState<any>(initialCountry);
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleCountryChange = (country: any) => {
    setSelectedCountry(country);
    console.log(country);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cleanValue = value.replace(/\D/g, "");
    setPhoneNumber(cleanValue);
    const fullNumber = `${selectedCountry.phoneCode}${cleanValue}`;
    register(name).onChange({
      target: {
        name,
        value: fullNumber,
      },
    });
  };

  return (
    <div>
      <div className="flex space-x-2 items-center">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        {toolTipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button>
                  <CircleHelp className="w-4 h-4 text-slate-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{toolTipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="mt-2">
        <div className="flex gap-2">
          <div className="w-32">
            <div className="">
              <div className="flex items-center space-x-2">
                <Select
                  isSearchable
                  primaryColor="blue"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  options={modifiedCountries}
                  placeholder={label}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder={placeholder || "Phone number"}
              className={cn(
                "block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm",
                errors[name] && "border-red-500 focus:ring-red-500 focus:border-red-500"
              )}
            />
            <input
              type="hidden"
              {...register(name, { required: true })}
              value={`${selectedCountry.phoneCode}${phoneNumber}`}
            />
          </div>
        </div>
        {errors[name] && (
          <span className="text-xs text-red-600">{label} is required</span>
        )}
      </div>
    </div>
  );
}
