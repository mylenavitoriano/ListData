import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "./Button";
import { DeleteUser } from "../actions/user";
import { toast } from "sonner";
import { useState } from "react";
import Loader from "./Loader";

const ModalDeleteUser = ({
  id,
  name,
  open,
  setOpen,
}: {
  id: string;
  name: string;
  open: boolean;
  setOpen: (state: boolean) => void;
}) => {
  const [loading, setLoading] = useState(false);
  const deleteUser = async () => {
    setLoading(true);
    const res = await DeleteUser(id);

    if (res) {
      toast.success("Usuário excluido com sucesso.");
      setOpen(false);
    } else {
      toast.error("Erro ao excluir usuário.");
    }

    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md w-4/5 rounded-sm">
        <DialogHeader>
          <DialogTitle>
            <p className="text-left">Confirmação de exclusão</p>
          </DialogTitle>
          <DialogDescription className="py-4">
            <p className="text-left">
              <span>Tem certeza de que deseja excluir o usuário </span>
              <strong>{name}</strong>?
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="justify-end">
          <div className="flex flex-row justify-end gap-2">
            <DialogClose asChild>
              <Button type="button" variant="secondary" disabled={loading}>
                Cancelar
              </Button>
            </DialogClose>
            <Button
              variant="destructive"
              onClick={() => deleteUser()}
              disabled={loading}
            >
              {loading ? (
                <Loader color="fill-destructive-foreground" />
              ) : (
                "Sim, excluir"
              )}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDeleteUser;
