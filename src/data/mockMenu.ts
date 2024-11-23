import { MenuCategory } from "../types/MenuItem";
export const mockMenuData: MenuCategory[] = [
    {
      id: "appetizers",
      name: "Appetizers",
      items: [
        {
          id: "app1",
          name: "Garlic Bread",
          description: "Freshly baked bread with garlic butter and herbs",
          price: 6.99,
        },
        {
          id: "app2",
          name: "Bruschetta",
          description: "Toasted bread topped with tomatoes, garlic, and basil",
          price: 8.99,
        },
      ],
    },
    {
      id: "mains",
      name: "Main Courses",
      items: [
        {
          id: "main1",
          name: "Grilled Salmon",
          description: "Fresh Atlantic salmon with lemon butter sauce",
          price: 24.99,
        },
        {
          id: "main2",
          name: "Ribeye Steak",
          description: "12oz ribeye steak cooked to your preference",
          price: 32.99,
        },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      items: [
        {
          id: "des1",
          name: "Chocolate Cake",
          description: "Rich chocolate layer cake with ganache",
          price: 8.99,
        },
        {
          id: "des2",
          name: "Crème Brûlée",
          description: "Classic French vanilla custard with caramelized sugar",
          price: 9.99,
        },
      ],
    },
  ];