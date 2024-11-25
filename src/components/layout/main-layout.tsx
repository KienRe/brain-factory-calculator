"use client";

import React from "react";
import { Sidebar } from "./sidebar";

export function MainLayout() {
  return (
    <div className="h-screen flex">
      {/* Main production graph area */}
      <div className="flex-1 bg-gray-900 p-4">
        <div className="h-full border-2 border-dashed border-gray-700 rounded-lg flex items-center justify-center text-gray-500">
          Production graph will be displayed here
        </div>
      </div>

      {/* Right sidebar */}
      <Sidebar />
    </div>
  );
}
