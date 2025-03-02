"use client";

import { useState, useEffect } from "react";
import {
  Pagination as PaginationUI,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  ChevronLeft,
  ChevronRight,
  CircleArrowLeft,
  CircleArrowRight,
} from "lucide-react";
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
    if (width != undefined) {
      //verificar se é mobile
      setIsMobile(window.innerWidth <= 640);
    }
  }, [width]);

  //ir para a página selecionada por botão
  const goToPage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  //página anterior
  const handlePrevious = () => goToPage(currentPage - 1);
  //página seguinte
  const handleNext = () => goToPage(currentPage + 1);

  //lógica para mostrar os botões
  const getPageNumbers = () => {
    if (isMobile) {
      //versão mobile
      if (currentPage === 1) return [1, "...", totalPages];
      if (currentPage === totalPages) return [1, "...", totalPages];
      if (currentPage === 2) return [1, 2, "...", totalPages];
      if (currentPage === totalPages - 1)
        return [1, "...", totalPages - 1, totalPages];
      return [1, "...", currentPage, "...", totalPages];
    }

    const visiblePages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    //páginas que apareceram em torno da página atual
    const leftBound = Math.max(2, currentPage - 1);
    const rightBound = Math.min(totalPages - 1, currentPage + 1);

    //primeira página sempre será visualizada
    visiblePages.push(1);

    //lógica para não exibir muitos botões mas saber que tem páginas a serem exibidas
    if (leftBound > 2) visiblePages.push("...");

    //adiciona os botões entre os que estão em volta da página atual
    for (let i = leftBound; i <= rightBound; i++) {
      visiblePages.push(i);
    }

    //lógica para não exibir muitos botões mas saber que tem páginas a serem exibidas
    if (rightBound < totalPages - 1) visiblePages.push("...");

    //última página sempre será visualizada
    visiblePages.push(totalPages);

    return visiblePages;
  };

  return (
    <PaginationUI className="mt-4">
      <PaginationContent>
        {currentPage != 1 && (
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
        {currentPage != totalPages && (
          <PaginationItem>
            <ChevronRight onClick={handleNext} className="cursor-pointer" />
          </PaginationItem>
        )}
      </PaginationContent>
    </PaginationUI>
  );
}
