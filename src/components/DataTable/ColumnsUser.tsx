"use client";

import { ColumnDef } from "@tanstack/react-table";
import { userType } from "../../types/user";
import { Button } from "../Button";
import { LucidePencil, LucideTrash } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<userType>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Nome" },
  { accessorKey: "job", header: "Cargo" },
  { accessorKey: "company", header: "Empresa" },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.getValue("id");
      return (
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="border-destructive">
            <LucideTrash className="text-destructive" />
          </Button>
          <Link href={`/user/${id}`}>
            <Button variant="outline" size="icon" className="border-primary">
              <LucidePencil className="text-primary" />
            </Button>
          </Link>
        </div>
      );
    },
  },
];
