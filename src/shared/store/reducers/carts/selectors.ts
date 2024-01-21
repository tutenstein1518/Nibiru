import { RootState } from "../..";

export const cartsSelector = (state: RootState) => {
  const { carts, category, byDate, byPrice, byRating, byInput } = state.carts;
  let filteredCarts = [...carts];

  // byCategory
  if (category.length) {
    filteredCarts = filteredCarts.filter((item) =>
      category.includes(item.category)
    );
  }

  // byDate
  if (byDate) {
    filteredCarts = filteredCarts.sort((a, b) => {
      const first = new Date(a.create_at);
      const second = new Date(b.create_at);
      if (byDate == "2") {
        return first.getTime() - second.getTime();
      }
      if (byDate == "1") {
        return second.getTime() - first.getTime();
      }
      return 0;
    });
  }

  // byPrice
  if (byPrice) {
    filteredCarts = filteredCarts.sort((a, b) => {
      const first = a.price;
      const second = b.price;
      if (byPrice == "1") {
        return parseFloat(first) - parseFloat(second);
      }
      if (byPrice == "2") {
        return parseFloat(second) - parseFloat(first);
      }
      return 0;
    });
  }

  // byRating
  if (byRating) {
    filteredCarts = filteredCarts.sort((a, b) => {
      const first = a.rating;
      const second = b.rating;
      if (byRating == 1) {
        return second - first;
      }
      if (byRating == 2) {
        return first - second;
      }
      return 0;
    });
  }

  // byInput
  if (byInput) {
    const inputValue = byInput.toLowerCase();
    if (inputValue.trim().length > 0) {
      filteredCarts = filteredCarts.filter((i) => {
        const iName = i.name.toLowerCase();
        const iSaller = i.saller.toLowerCase();
        return iName.includes(inputValue) || iSaller.includes(inputValue);
      });
    }
  }

  return filteredCarts;
};

export const loadingSelector = (state: RootState) => {
  return state.carts.loading;
};

export const errorSelector = (state: RootState) => {
  return state.carts.error;
};
export const categorySelector = (state: RootState) => {
  return state.carts.category;
};
export const byDateSelector = (state: RootState) => {
  return state.carts.byDate;
};
export const byInputSelector = (state: RootState) => {
  return state.carts.byInput;
};
export const countSelector = (state: RootState) => {
  return state.carts.count;
};
