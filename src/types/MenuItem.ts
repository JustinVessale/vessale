export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image?: string;
  }
  
  export interface MenuCategory {
    id: string;
    name: string;
    items: MenuItem[];
  }
  
