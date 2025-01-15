"use client";
import Menu from "@/components/Menu";
import { AuroraBackgroundLight } from "@/components/ui/aurora-background-light";
import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="min-h-screen overflow-auto relative">
      <AuroraBackgroundLight className="absolute inset-0 h-full w-full"><></></AuroraBackgroundLight>
      <div className="relative z-50 flex h-full flex-col p-4">
        <Menu darkLogo linkText="Learn More" />
      </div>
    </div>
  );
}
