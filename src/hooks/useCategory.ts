import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from "@/common/dto/category.dto";
import { categoryService } from "@/services/category.service";
import { CategoryStore } from "@/stores/category.store";
import { useMutation, useQuery } from "react-query";

export const useCategory = (categoryId?: string) => {
  const { setCategories, setCategory } = CategoryStore();

  const categoriesQuery = useQuery(
    "categories",
    async () => {
      return await categoryService.getCategories();
    },
    {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setCategories(data.data);
      },
    },
  );

  const categoryQuery = useQuery(
    ["category", categoryId],
    async () => {
      if (!categoryId) {
        return null;
      }

      return await categoryService.getCategory(categoryId);
    },
    {
      refetchOnWindowFocus: false,
      enabled: !!categoryId,
      onSuccess: (data) => {
        if (data) {
          setCategory(data.data);
        }
      },
    },
  );

  const createCategoryMutation = useMutation(
    async (category: CreateCategoryDto) => {
      return await categoryService.createCategory(category);
    },
    {
      onSuccess: (data) => {
        categoriesQuery.refetch();
      },
    },
  );

  const updateCategoryMutation = useMutation(
    async ({ category, id }: { category: UpdateCategoryDto; id: string }) => {
      return await categoryService.updateCategory(id, category);
    },
    {
      onSuccess: (data) => {
        categoriesQuery.refetch();
      },
    },
  );

  const deleteCategoryMutation = useMutation(
    async (id: string) => {
      return await categoryService.deleteCategory(id);
    },
    {
      onSuccess: (data) => {
        categoriesQuery.refetch();
      },
    },
  );

  return {
    categoriesQuery,
    categoryQuery,
    createCategoryMutation,
    updateCategoryMutation,
    deleteCategoryMutation,
  };
};
