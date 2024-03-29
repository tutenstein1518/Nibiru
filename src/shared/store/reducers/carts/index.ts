import { ICart, ICartFilters } from "../../../types/cart";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  categorySelector,
  errorSelector,
  loadingSelector,
  cartsSelector,
  countSelector,
} from "./selectors";

interface IState extends ICartFilters {
  count: number;
  carts: ICart[];
  loading: boolean;
  error: string;
  productDetail: null | ICart;
}
const initialState = {
  count: 0,
  carts: [],
  loading: false,
  error: "",
  category: [],
  min: null,
  max: null,
  byDate: "",
  byPrice: "",
  byRating: null,
  byInput: "",
  productDetail: null,
} as unknown as IState;

export const getCarts = createAsyncThunk(
  "getCarts",
  async (offset?: number) => {
    const response = await fetch("http://localhost:1703/nibiru");
    const data = (await response.json()) as { count: number; results: ICart[] };
    const sliceResults = data.results.slice(offset, (offset || 0) + 10);
    return { count: data.count, results: sliceResults };
  }
);

export const getProductsDetail = createAsyncThunk(
  "getProductsDetail",
  async (id: string) => {
    const response = await fetch("http://localhost:1703/nibiru");
    const data = (await response.json()) as { count: number; results: ICart[] };
    return data.results.filter((i) => i.id === Number(id))[0] || null;
  }
);

export const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string[]>) => {
      state.category = action.payload;
    },
    setFilterByDate: (state, action: PayloadAction<string>) => {
      state.byDate = action.payload;
    },
    setFilterByPrice: (state, action: PayloadAction<string>) => {
      state.byPrice = action.payload;
    },
    setFilterByRating: (state, action: PayloadAction<number>) => {
      state.byRating = action.payload;
    },
    setFilterByInput: (state, action: PayloadAction<string>) => {
      state.byInput = action.payload;
    },
    reset: () => {
      return initialState;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCarts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCarts.rejected, (state) => {
        state.loading = false;
        state.error = "Ошибка загрузки";
      })
      .addCase(getCarts.fulfilled, (state, action) => {
        const { count, results } = action.payload;
        state.loading = false;
        state.error = "";
        state.count = count;
        state.carts = [...state.carts, ...results];
      })
      .addCase(getProductsDetail.fulfilled, (state, action) => {
        state.productDetail = action.payload;
      });
  },
});

export const {
  reset,
  setCategory,
  setFilterByDate,
  setFilterByPrice,
  setFilterByRating,
  setFilterByInput,
} = cartsSlice.actions;
export {
  categorySelector,
  errorSelector,
  loadingSelector,
  cartsSelector,
  countSelector,
};

export default cartsSlice.reducer;
