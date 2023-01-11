import { drinksRes, drinkType, drinksState } from "~/ts-types/drinks";

export default (): drinksState => ({
  drink: {} as drinkType,
  topDrinks: {} as drinksRes,
});
