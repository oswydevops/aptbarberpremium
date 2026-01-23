
export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
}

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  sources?: GroundingSource[];
}
