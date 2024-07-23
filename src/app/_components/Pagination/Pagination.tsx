"use client";

import { Stack } from "@mui/material";
import React from "react";
import PaginationItem from "@mui/material/Pagination";
import { usePathname, useRouter } from "next/navigation";
export const Pagination = ({ number }: { number: number }) => {
  const router= useRouter()
  const url = usePathname()
  
  return (
    <div className="flex items-end justify-center w-full pt-3">
      <Stack spacing={2}>
        <PaginationItem count={Math.ceil(number / 6)} onChange={(_, value) => router.push(url + `?page=${value}`) } />
      </Stack>
    </div>
  );
};
