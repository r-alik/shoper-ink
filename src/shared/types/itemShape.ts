export interface PictureType {
  id: string | number;
  p360: string;
  p800: string;
  p1200: string;
  jpg360: string;
  jpg800: string;
  jpg1200: string;
  isAvailable: boolean;
  title: string;
  price: number;
  description: string;
  alt?: string;
}
