export const closeMenu = () => ({
  type: "CLOSE_MENU",
});

export const openMenu = () => ({
  type: "OPEN_MENU",
});

export const changeLang = () => ({
  type: "CHANGE_LANG",
});

export const nextSlide = () => ({
  type: "NEXT_SLIDE",
  payload: 1,
});

export const prevSlide = () => ({
  type: "PREV_SLIDE",
  payload: 1,
});

export const dotSlide = (index) => ({
  type: "DOT_SLIDE",
  payload: index,
});

export const lastSlide = (last) => ({
  type: "LAST_SLIDE",
  payload: last,
});

export const firstSlide = (first) => ({
  type: "FIRST_SLIDE",
  payload: first,
});

export const addCities = (citiesArray) => ({
  type: "ADD_CITIES",
  payload: citiesArray,
});

export const addPoints = (pointsArray) => ({
  type: "ADD_POINTS",
  payload: pointsArray,
});

export const openCity = () => ({
  type: "OPEN_CITY",
});

export const openPoint = () => ({
  type: "OPEN_POINT",
});

export const cityText = (target) => ({
  type: "CITY_TEXT",
  payload: target,
});

export const pointText = (target) => ({
  type: "POINT_TEXT",
  payload: target,
});

export const addCars = (carsArray) => ({
  type: "ADD_CARS",
  payload: carsArray,
});

export const addCategory = (categoryArray) => ({
  type: "ADD_CATEGORY",
  payload: categoryArray,
});

export const addCity = (city) => ({
  type: "ADD_CITY",
  payload: city,
});

export const addPoint = (point) => ({
  type: "ADD_POINT",
  payload: point,
});

export const setCategory = (name) => ({
  type: "SET_CATEGORY",
  payload: name,
});

export const selectModel = (model) => ({
  type: "SELECT_MODEL",
  payload: model,
});

export const selectMinPrice = (minprice) => ({
  type: "SELECT_MINPRICE",
  payload: minprice,
});

export const selectMaxPrice = (maxprice) => ({
  type: "SELECT_MAXPRICE",
  payload: maxprice,
});

export const selectCarId = (id) => ({
  type: "SELECTCAR_ID",
  payload: id,
});

export const setColor = (color) => ({
  type: "SET_COLOR",
  payload: color,
});

export const addRate = (rate) => ({
  type: "ADD_RATE",
  payload: rate,
});

export const setRate = (rate) => ({
  type: "SET_RATE",
  payload: rate,
});
