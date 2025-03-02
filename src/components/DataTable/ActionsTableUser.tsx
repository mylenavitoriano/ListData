"use client";

import { LucidePencil, LucideTrash } from "lucide-react";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
import ModalDeleteUser from "../ModalDeleteUser";
import { useState } from "react";

const ActionTableUser = ({ id, name }: { id: string; name: string }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          className="border-destructive"
          onClick={() => setIsModalOpen(true)}
        >
          <LucideTrash className="text-destructive" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="border-primary"
          onClick={() => router.push(`/edit/${id}`)}
        >
          <LucidePencil className="text-primary" />
        </Button>
      </div>

      <ModalDeleteUser
        id={id}
        name={name}
        open={isModalOpen}
        setOpen={setIsModalOpen}
      />
    </>
  );
};

export default ActionTableUser;
