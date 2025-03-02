"use client";

import {
  Ellipsis,
  LucidePencil,
  LucideTrash,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "../Button";
import { useRouter } from "next/navigation";
import ModalDeleteUser from "../ModalDeleteUser";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ModalUserInfo from "../ModalUserInfo";
import { userType } from "../../types/user";

const ActionTableUser = ({ user }: { user: userType }) => {
  const router = useRouter();
  const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  return (
    <>
      <div className="hidden sm:flex gap-2 justify-end">
        <Button
          variant="outline"
          size="icon"
          className="border-destructive"
          onClick={() => setIsModalDeleteOpen(true)}
        >
          <LucideTrash className="text-destructive" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="border-primary"
          onClick={() => router.push(`/edit/${user.id}`)}
        >
          <LucidePencil className="text-primary" />
        </Button>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsModalInfoOpen(true)}
        className="sm:hidden"
      >
        <Ellipsis />
      </Button>

      <ModalUserInfo
        user={user}
        open={isModalInfoOpen}
        setOpen={setIsModalInfoOpen}
        setOpenModalDelete={setIsModalDeleteOpen}
      />

      <ModalDeleteUser
        id={user.id}
        name={user.name}
        open={isModalDeleteOpen}
        setOpen={setIsModalDeleteOpen}
      />
    </>
  );
};

export default ActionTableUser;
