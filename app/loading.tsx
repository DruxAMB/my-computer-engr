import React from "react";

export default function Loading() {
  return (
    <div className="flex space-x-2 justify-center items-center w-full h-screen bg-transparent">
      <div className="h-8 w-8 bg-blue-800 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-blue-800 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-blue-800 rounded-full animate-bounce"></div>
    </div>
  );
}
