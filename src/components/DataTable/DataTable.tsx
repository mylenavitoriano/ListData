"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pagination } from "../Pagination";
import { useState, useMemo } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  totalPerPage?: number;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  totalPerPage = 10,
}: DataTableProps<TData, TValue>) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * totalPerPage;
    return data.slice(startIndex, startIndex + totalPerPage);
  }, [currentPage, totalPerPage, data]);

  const table = useReactTable({
    data: currentData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Table className="mb-4 z-10">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <Pagination
        totalItems={data.length}
        itemsPerPage={totalPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
