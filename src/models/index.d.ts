import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED"
}

type EagerOrderItem = {
  readonly menuItemId: string;
  readonly quantity: number;
  readonly price: number;
  readonly name: string;
}

type LazyOrderItem = {
  readonly menuItemId: string;
  readonly quantity: number;
  readonly price: number;
  readonly name: string;
}

export declare type OrderItem = LazyLoading extends LazyLoadingDisabled ? EagerOrderItem : LazyOrderItem

export declare const OrderItem: (new (init: ModelInit<OrderItem>) => OrderItem)

type EagerChain = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chain, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly branding_banner?: string | null;
  readonly branding_primary_color?: string | null;
  readonly restaurantID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChain = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chain, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly branding_banner?: string | null;
  readonly branding_primary_color?: string | null;
  readonly restaurantID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Chain = LazyLoading extends LazyLoadingDisabled ? EagerChain : LazyChain

export declare const Chain: (new (init: ModelInit<Chain>) => Chain) & {
  copyOf(source: Chain, mutator: (draft: MutableModel<Chain>) => MutableModel<Chain> | void): Chain;
}

type EagerRestaurant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly subdomain?: string | null;
  readonly branding_banner?: string | null;
  readonly branding_color?: string | null;
  readonly chain_id?: string | null;
  readonly Chains?: (Chain | null)[] | null;
  readonly categories?: (Category | null)[] | null;
  readonly orders?: (Order | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRestaurant = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Restaurant, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly subdomain?: string | null;
  readonly branding_banner?: string | null;
  readonly branding_color?: string | null;
  readonly chain_id?: string | null;
  readonly Chains: AsyncCollection<Chain>;
  readonly categories: AsyncCollection<Category>;
  readonly orders: AsyncCollection<Order>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Restaurant = LazyLoading extends LazyLoadingDisabled ? EagerRestaurant : LazyRestaurant

export declare const Restaurant: (new (init: ModelInit<Restaurant>) => Restaurant) & {
  copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant>) => MutableModel<Restaurant> | void): Restaurant;
}

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly restaurantID: string;
  readonly items?: (MenuItem | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly restaurantCategoriesId?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly restaurantID: string;
  readonly items: AsyncCollection<MenuItem>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly restaurantCategoriesId?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerMenuItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MenuItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly categoryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryItemsId?: string | null;
}

type LazyMenuItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MenuItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly categoryID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryItemsId?: string | null;
}

export declare type MenuItem = LazyLoading extends LazyLoadingDisabled ? EagerMenuItem : LazyMenuItem

export declare const MenuItem: (new (init: ModelInit<MenuItem>) => MenuItem) & {
  copyOf(source: MenuItem, mutator: (draft: MutableModel<MenuItem>) => MutableModel<MenuItem> | void): MenuItem;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly items: (OrderItem | null)[];
  readonly total: number;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly restaurantID: string;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
  readonly restaurantOrdersId?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly items: (OrderItem | null)[];
  readonly total: number;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly restaurantID: string;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
  readonly restaurantOrdersId?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}