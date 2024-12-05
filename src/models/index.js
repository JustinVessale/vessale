// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "PENDING": "PENDING",
  "PROCESSING": "PROCESSING",
  "COMPLETED": "COMPLETED",
  "CANCELLED": "CANCELLED"
};

const { Chain, Restaurant, Category, MenuItem, Order, OrderItem } = initSchema(schema);

export {
  Chain,
  Restaurant,
  Category,
  MenuItem,
  Order,
  OrderStatus,
  OrderItem
};