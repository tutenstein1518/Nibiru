export interface ICart {
  id: number;
  description: string;
  name: string;
  category: string;
  subcategory: "string";
  rating: number;
  price: string;
  saller: string;
  img_avatar: string;
  img: string;
  img_slider_1: string;
  img_slider_2: string;
  img_slider_3: string;
  create_at: string;
  items: any[];
}

export interface ICartFilters {
  category: string[];
  min: null;
  max: null;
  byDate: string;
  byPrice: string;
  byRating: number;
  byInput: string;
}
