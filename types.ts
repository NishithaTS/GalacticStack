
export interface Sculpture {
  id: string;
  name: string;
  artist: string;
  year: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}
