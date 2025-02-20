// src/Components/BeforeRegister/type.ts
export interface BookBaseProps {
  id: string; // Changed from 'key' to 'id'
  image: string;
  title: string;
  author: string;
  category?: string;
}

export interface BookDataProps extends BookBaseProps {
  categoryType: 'E-book' | 'Audio Book' | 'Video Book';
  genre: string;
  publicationDate: string;
  pages: number;
  formats: string[];
  description: string;
}