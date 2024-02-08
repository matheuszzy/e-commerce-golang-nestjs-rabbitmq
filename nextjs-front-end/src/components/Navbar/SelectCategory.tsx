"use client";

import { Category } from "@/app/models";
import { searchProducts } from "@/app/utils";
import { FormControl, MenuItem, Select } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter, useSearchParams } from "next/navigation";

export function SelectCategory({ categories }: { categories: Category[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <FormControl size="small" sx={{ width: 200 }}>
      <Select
        // className="select-category"
        name="select-category"
        sx={{ backgroundColor: grey[400] }}
        value={searchParams.get("category_id") || "0"}
        onChange={(event) => {
          const search = searchParams.get("search");
          const category_id = event.target.value as string;
          searchProducts(router, search, category_id);
        }}>
        <MenuItem value="0">Todas as categorias</MenuItem>
        {categories.map((category) => (
          <MenuItem key={category.Name} value={category.ID}>
            {category.Name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}