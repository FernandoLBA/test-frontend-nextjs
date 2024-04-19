export interface IProduct {
  id: string;
  title: string;
  vendor: string;
  ratings: IRating[];
  reviews: number;
  price: number;
}

export interface IRating {
  id: string;
  score: number;
  ratedBy: string;
}
