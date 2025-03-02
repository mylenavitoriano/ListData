"use server";

import { revalidateTag } from "next/cache";
import { userType } from "../types/user";

export const GetListUsers = async () => {
  const res = await fetch(
    "https://67bf2697b2320ee05012c774.mockapi.io/api/alymente/users",
    {
      cache: "no-cache",
      next: {
        tags: ["listUsers"],
      },
    }
  );
  if (!res.ok) throw new Error("Erro ao buscar usuários");
  return res.json();
};

export const GetUserId = async (id: number | string) => {
  const res = await fetch(
    `https://67bf2697b2320ee05012c774.mockapi.io/api/alymente/users/${id}`,
    {
      cache: "no-cache",
      next: {
        tags: ["userData"],
      },
    }
  );
  if (!res.ok) throw new Error("Erro ao buscar usuário");
  return res.json();
};

export const SetNewUser = async (user: userType) => {
  const { id, ...userData } = user;

  const res = await fetch(
    `https://67bf2697b2320ee05012c774.mockapi.io/api/alymente/users`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );

  if (!res.ok) throw new Error("Erro ao cadastrar usuário");

  // Revalida os caches depois de atualizar
  revalidateTag("listUsers");

  return res.json();
};

export const SetEditUser = async (user: userType) => {
  const { id, ...userData } = user;

  const res = await fetch(
    `https://67bf2697b2320ee05012c774.mockapi.io/api/alymente/users/${user.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );

  if (!res.ok) throw new Error("Erro ao atualizar usuário");

  // Revalida os caches depois de atualizar
  revalidateTag("userData");
  revalidateTag("listUsers");

  return res.json();
};

export const DeleteUser = async (id: string) => {
  const res = await fetch(
    `https://67bf2697b2320ee05012c774.mockapi.io/api/alymente/users/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!res.ok) throw new Error("Erro ao excluir usuário");

  // Revalida os caches depois de atualizar
  revalidateTag("listUsers");

  return res.json();
};
