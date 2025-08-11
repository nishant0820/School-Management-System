"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

type BannerProps = {
  message: string;
  type?: "info" | "success" | "warning" | "danger";
};

export default function Banner({ message, type = "info" }: BannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const typeStyles = {
    info: "bg-blue-100 border-blue-300 text-blue-800",
    success: "bg-green-100 border-green-300 text-green-800",
    warning: "bg-orange-100 border-orange-300 text-orange-800",
    danger: "bg-red-100 border-red-300 text-red-800",
  };

  return (
    <div
      className={`flex items-center justify-between px-4 py-3 border rounded-lg shadow-sm mb-4 ${typeStyles[type]}`}
    >
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-current hover:opacity-70 focus:outline-none"
        aria-label="Dismiss banner"
      >
        <X size={18} />
      </button>
    </div>
  );
}
