"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

export type SelectOptionProps = {
  label: string
  value: string
}

interface FormSelectInputProps {
  label: string
  options: SelectOptionProps[]
  option: any
  setOption: (option: any) => void
  placeholder?: string
}

export default function FormSelectInput({ label, options, option, setOption, placeholder }: FormSelectInputProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (selectedOption: SelectOptionProps) => {
    setOption(selectedOption)
    setIsOpen(false)
  }

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-3 py-2 text-left bg-white border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-300 transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-900">{option ? option.label : placeholder || "Select"}</span>
            <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? "rotate-90" : ""}`} />
          </div>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
            <div className="py-1">
              {options.map((optionItem) => (
                <button
                  key={optionItem.value}
                  type="button"
                  onClick={() => handleSelect(optionItem)}
                  className="w-full px-3 py-2 text-left text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                >
                  {optionItem.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
