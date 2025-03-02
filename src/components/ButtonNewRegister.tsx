"use client";

import { useRouter } from "next/navigation";
import { Button } from "./Button";

const ButtonNewRegister = () => {
  const router = useRouter();
  return (
    <div className="flex justify-end mb-8">
      <Button onClick={() => router.push("/user")}>Novo Cadastro</Button>
    </div>
  );
};

export default ButtonNewRegister;
