"use client";

import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { userType } from "../types/user";
import { Button } from "./Button";
import { useRouter } from "next/navigation";
import { SetEditUser, SetNewUser } from "../actions/user";
import { toast } from "sonner";

const FormUser = ({ user }: { user?: userType }) => {
  const router = useRouter();
  const isEdicao = !!user;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<userType>({
    defaultValues: user,
    shouldUnregister: true,
  });

  const onSubmit = async (data: userType) => {
    console.log(data);
    if (isEdicao) {
      const resEdit = await SetEditUser(data);

      if (resEdit) {
        toast.success("Usuário atualizado com sucesso.");
      } else {
        toast.error("Erro ao atualizar usuário.");
      }
    } else {
      const resNew = await SetNewUser(data);

      if (resNew) {
        toast.success("Usuário cadastrado com sucesso.");
        reset();
      } else {
        toast.error("Erro ao cadastrar usuário.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 ">
        {isEdicao && <Input label="ID" {...register("id")} disabled />}
        <Input
          label="Nome*"
          {...register("name", { required: "Campo obrigatório!" })}
          placeholder="Digite o nome"
          error={errors.name?.message}
        />
        <Input
          label="URL Avatar (opcional)"
          {...register("avatar")}
          placeholder="ex: www.website.com.br"
        />
        <Input
          label="Conta*"
          {...register("account", { required: "Campo obrigatório!" })}
          error={errors.account?.message}
          placeholder="Digite a conta"
        />
        <Input
          label="Nome da Mãe*"
          {...register("mother", { required: "Campo obrigatório!" })}
          error={errors.mother?.message}
          placeholder="Digite o nome da mãe"
        />
        <Input
          label="Cidade*"
          {...register("city", { required: "Campo obrigatório!" })}
          error={errors.city?.message}
          placeholder="Digite a cidade"
        />
        <Input
          label="País*"
          {...register("country", { required: "Campo obrigatório!" })}
          error={errors.country?.message}
          placeholder="Digite o país"
        />
        <Input
          label="Cargo*"
          {...register("job", { required: "Campo obrigatório!" })}
          error={errors.job?.message}
          placeholder="Digite o cargo"
        />
        <Input
          label="Empresa*"
          {...register("company", { required: "Campo obrigatório!" })}
          error={errors.company?.message}
          placeholder="Digite a empresa"
        />
      </div>

      <div className="flex justify-end gap-2 mt-8">
        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            isEdicao ? router.push("/") : reset();
          }}
        >
          {isEdicao ? "Cancelar" : "Limpar"}
        </Button>
        <Button type="submit">Salvar</Button>
      </div>
    </form>
  );
};

export default FormUser;
