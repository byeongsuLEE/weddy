interface Image {
  imageUrl: string;
}

export interface Product {
  id: string;
  type: string;
  name: string;
  price: string;
  address: string;
  content: string;
  vendorName: string;
  vendorId: string;
  images: Image[];
}

export interface ReviewData {
  content: string;
  date: string;
  score: number;
}