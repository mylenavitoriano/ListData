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
  const deleteUser = async () => {
    const res = await DeleteUser(id);

    if (res) {
      toast.success("Usuário excluido com sucesso.");
      setOpen(false);
    } else {
      toast.error("Erro ao excluir usuário.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md w-md md:w-1/2">
        <DialogHeader>
          <DialogTitle>
            <p className="text-left">Confirmar exclusão</p>
          </DialogTitle>
          <DialogDescription className="py-4">
            <p className="text-left">
              Confirma a exclusão do usuário <strong>{name}</strong>?
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="justify-end">
          <div className="flex flex-row justify-end gap-2">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancelar
              </Button>
            </DialogClose>
            <Button variant="destructive" onClick={() => deleteUser()}>
              Sim, excluir
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDeleteUser;
