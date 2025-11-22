"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
}

export function useToast() {
  const [toast, setToast] = useState<ToastProps | null>(null);

  const showToast = (props: ToastProps) => {
    setToast(props);
    setTimeout(() => {
      setToast(null);
    }, props.duration || 3000);
  };

  return { toast, showToast };
}

export function Toast({ message, type = "info" }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-primary",
  }[type];

  return (
    <div
      className={`fixed top-20 right-6 z-50 px-6 py-4 rounded-lg shadow-lg text-white ${bgColor} transition-all duration-300 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      }`}
    >
      <p className="font-medium">{message}</p>
    </div>
  );
}
