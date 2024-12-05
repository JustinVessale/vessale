import { ToastDuration } from '../types/toast';

export const TOAST_SETTINGS = {
  LIMIT: 1,
  REMOVE_DELAY: 1000000,
} as const;

export const TOAST_MESSAGES = {
  ITEM_ADDED: (itemName: string) => ({
    title: "Added to cart",
    description: `${itemName} has been added to your cart.`,
    duration: ToastDuration.SHORT,
  }),
  ITEM_REMOVED: (itemName: string) => ({
    title: "Item removed",
    description: `${itemName} has been removed from your cart.`,
    duration: ToastDuration.SHORT,
  }),
  QUANTITY_UPDATED: (itemName: string, quantity: number) => ({
    title: "Quantity updated",
    description: `${itemName} quantity updated to ${quantity}.`,
    duration: ToastDuration.SHORT,
  }),
} as const;