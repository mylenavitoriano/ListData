import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { userType } from "../types/user";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./Button";
import { LucidePencil, LucideTrash } from "lucide-react";
import { useRouter } from "next/navigation";

const ModalUserInfo = ({
  user,
  open,
  setOpen,
  setOpenModalDelete,
}: {
  user: userType;
  open: boolean;
  setOpen: (state: boolean) => void;
  setOpenModalDelete: (state: boolean) => void;
}) => {
  const router = useRouter();

  const name = user.name;

  // dividir o nome para pegar as iniciais de cada um
  const nameParts = name?.split(" ").filter(Boolean) || [];
  const initials =
    nameParts.length > 1
      ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
      : nameParts[0]?.charAt(0).toUpperCase() || "?";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md w-4/5 rounded-sm">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription className="py-1">
            <div className="flex gap-4 items-center">
              <Avatar className="h-14 w-14">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="text-lg">{initials}</AvatarFallback>
              </Avatar>

              <div className="flex flex-col justify-start">
                <p className="text-lg text-start font-semibold">{user.name}</p>
                <p className="text-start text-xs">{user.job}</p>
                <p className="text-start text-xs">{user.company}</p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="flex flex-col justify-start gap-1">
            <p className="text-start">
              <strong>ID: </strong>
              <span>{user.id}</span>
            </p>

            <p className="text-start">
              <strong>Local: </strong>
              <span>
                {user.city}, {user.country}
              </span>
            </p>

            <p className="text-start">
              <strong>Conta: </strong>
              <span>{user.account}</span>
            </p>

            <p className="text-start">
              <strong>Nome da Mãe: </strong>
              <span>{user.mother}</span>
            </p>
          </div>

          <div className="flex gap-2 justify-end mt-6">
            <Button
              variant="outline"
              size="icon"
              className="border-destructive"
              onClick={() => {
                setOpen(false);
                setOpenModalDelete(true);
              }}
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalUserInfo;
