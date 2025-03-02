"use client";

import { ColumnDef } from "@tanstack/react-table";
import { userType } from "../../types/user";
import { Button } from "../Button";
import { LucidePencil, LucideTrash } from "lucide-react";
import Link from "next/link";
import ActionTableUser from "./ActionsTableUser";

export const columns: ColumnDef<userType>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Nome" },
  { accessorKey: "job", header: "Cargo" },
  { accessorKey: "company", header: "Empresa" },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <ActionTableUser id={row.getValue("id")} name={row.getValue("name")} />
      );
    },
  },
];
