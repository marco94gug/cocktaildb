import {
  CategoryListType,
  CategoryResponse,
  FilteredDrinkByCategory,
} from "../../ts-types/category";

export default (): CategoryListType => ({
  categoryList: {} as CategoryResponse,
  filteredByCategory: {} as FilteredDrinkByCategory,
});
