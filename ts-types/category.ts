type CategoryResponse = {
  drinks: Array<DrinksType>;
};

type DrinksType = {
  strCategory: string;
};

type CategoryListType = {
  categoryList: CategoryResponse;
};

export { CategoryListType, CategoryResponse, DrinksType };
