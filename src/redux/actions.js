export const closeMenu = () => ({
  type: "CLOSE_MENU",
});

export const openMenu = () => ({
  type: "OPEN_MENU",
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
