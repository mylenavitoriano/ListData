"use client";

import { ColumnDef } from "@tanstack/react-table";
import { userType } from "../../types/user";
import ActionTableUser from "./ActionsTableUser";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const columns: ColumnDef<userType>[] = [
  {
    id: "avatar",
    cell: ({ row }) => {
      const name = row.getValue("name") as string;

      // dividir o nome para pegar as iniciais de cada um
      const nameParts = name?.split(" ").filter(Boolean) || [];
      const initials =
        nameParts.length > 1
          ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
          : nameParts[0]?.charAt(0).toUpperCase() || "?";

      return (
        <Avatar className="hidden md:table-cell">
          <AvatarImage src={row.getValue("avatar") as string} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      );
    },
  },
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Nome" },
  { accessorKey: "job", header: "Cargo" },
  {
    accessorKey: "company",
    header: () => <span className="hidden md:table-cell">Empresa</span>,
    cell: ({ getValue }) => (
      <span className="hidden md:table-cell">{getValue() as string}</span>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <ActionTableUser id={row.getValue("id")} name={row.getValue("name")} />
      );
    },
  },
];
