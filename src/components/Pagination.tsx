"use client";

import { useState, useEffect } from "react";
import {
  Pagination as PaginationUI,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useWindowSize } from "../hooks/useWindowSize";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const { width } = useWindowSize();
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (width !== undefined) {
      // verificar se é mobile
      setIsMobile(window.innerWidth <= 640);
    }
  }, [width]);

  // Ajustar a página atual se o total de páginas diminuir
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(Math.max(1, totalPages));
      onPageChange(Math.max(1, totalPages));
    }
  }, [totalPages, currentPage, onPageChange]);

  // ir para a página selecionada por botão
  const goToPage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  // página anterior
  const handlePrevious = () => goToPage(currentPage - 1);
  // página seguinte
  const handleNext = () => goToPage(currentPage + 1);

  // lógica para mostrar os botões
  const getPageNumbers = () => {
    if (totalPages <= 3) {
      // Se houver 3 páginas ou menos, exibir todas sem "..."
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (isMobile) {
      // versão mobile
      if (currentPage === 1) return [1, 2, "...", totalPages];
      if (currentPage === totalPages)
        return [1, "...", totalPages - 1, totalPages];
      return [1, "...", currentPage, "...", totalPages];
    }

    const visiblePages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // páginas que aparecerão em torno da página atual
    const leftBound = Math.max(2, currentPage - 1);
    const rightBound = Math.min(totalPages - 1, currentPage + 1);

    visiblePages.push(1);
    if (leftBound > 2) visiblePages.push("...");
    for (let i = leftBound; i <= rightBound; i++) {
      visiblePages.push(i);
    }
    if (rightBound < totalPages - 1) visiblePages.push("...");
    visiblePages.push(totalPages);

    return visiblePages;
  };

  if (totalPages === 0) return null;

  return (
    <PaginationUI className="mt-4">
      <PaginationContent>
        {currentPage !== 1 && (
          <PaginationItem>
            <ChevronLeft onClick={handlePrevious} className="cursor-pointer" />
          </PaginationItem>
        )}
        {getPageNumbers().map((page, index) => (
          <PaginationItem key={index} className="cursor-pointer">
            {typeof page === "number" ? (
              <PaginationLink
                isActive={currentPage === page}
                onClick={() => goToPage(page)}
                className={`${currentPage === page && "border-primary"}`}
              >
                {page}
              </PaginationLink>
            ) : (
              <PaginationEllipsis />
            )}
          </PaginationItem>
        ))}
        {currentPage !== totalPages && (
          <PaginationItem>
            <ChevronRight onClick={handleNext} className="cursor-pointer" />
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationUI>
  );
}
