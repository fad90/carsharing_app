export const active = (state) => state.burgerReducer.menuActive;
export const current = (state) => state.sliderReducer.current;

export const language = (state) => state.burgerReducer.EngLanguage;

export const cities = (state) => state.dataReducer.cities;
export const points = (state) => state.dataReducer.points;

export const cityOpen = (state) => state.orderReducer.cityOpen;
export const pointOpen = (state) => state.orderReducer.pointOpen;

export const inputCity = (state) => state.orderReducer.inputCity;
export const inputPoint = (state) => state.orderReducer.inputPoint;

export const cars = (state) => state.dataReducer.cars;
export const category = (state) => state.dataReducer.category;

export const city = (state) => state.orderReducer.city;
export const point = (state) => state.orderReducer.point;

export const selectedCategory = (state) => state.orderReducer.category;

export const selectedModel = (state) => state.orderReducer.selectedCar.model;
export const selectedPriceMin = (state) =>
  state.orderReducer.selectedCar.priceMin;
export const selectedPriceMax = (state) =>
  state.orderReducer.selectedCar.priceMax;
export const selectedCarId = (state) => state.orderReducer.selectedCar.id;

export const color = (state) => state.orderReducer.addition.color;
export const selectedRate = (state) => state.orderReducer.addition.rate;

export const rate = (state) => state.dataReducer.rate;

export const services = (state) => state.orderReducer.addition.options;

export const dateFromSelector = (state) => state.orderReducer.addition.dateFrom;
export const dateToSelector = (state) => state.orderReducer.addition.dateTo;
