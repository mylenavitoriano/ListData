"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

const TitlePage = ({ title }: { title: string }) => {
  const route = useRouter();
  return (
    <div className="relative flex items-center justify-center pb-6">
      <Button
        variant="outline"
        size="icon"
        onClick={() => route.back()}
        className="absolute left-0"
      >
        <ChevronLeft />
      </Button>
      <p className="text-center text-lg font-semibold">{title}</p>
    </div>
  );
};

export default TitlePage;
