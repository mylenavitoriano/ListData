"use client";

import { ColumnDef } from "@tanstack/react-table";
import { userType } from "../../types/user";
import ActionTableUser from "./ActionsTableUser";

export const columns: ColumnDef<userType>[] = [
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
