/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChainInput = {
  id?: string | null,
  name?: string | null,
  branding_banner?: string | null,
  branding_primary_color?: string | null,
  restaurantID: string,
};

export type ModelChainConditionInput = {
  name?: ModelStringInput | null,
  branding_banner?: ModelStringInput | null,
  branding_primary_color?: ModelStringInput | null,
  restaurantID?: ModelIDInput | null,
  and?: Array< ModelChainConditionInput | null > | null,
  or?: Array< ModelChainConditionInput | null > | null,
  not?: ModelChainConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Chain = {
  __typename: "Chain",
  id: string,
  name?: string | null,
  branding_banner?: string | null,
  branding_primary_color?: string | null,
  restaurantID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateChainInput = {
  id: string,
  name?: string | null,
  branding_banner?: string | null,
  branding_primary_color?: string | null,
  restaurantID?: string | null,
};

export type DeleteChainInput = {
  id: string,
};

export type CreateRestaurantInput = {
  id?: string | null,
  name?: string | null,
  subdomain?: string | null,
  branding_banner?: string | null,
  branding_color?: string | null,
  chain_id?: string | null,
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null,
  subdomain?: ModelStringInput | null,
  branding_banner?: ModelStringInput | null,
  branding_color?: ModelStringInput | null,
  chain_id?: ModelIDInput | null,
  and?: Array< ModelRestaurantConditionInput | null > | null,
  or?: Array< ModelRestaurantConditionInput | null > | null,
  not?: ModelRestaurantConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Restaurant = {
  __typename: "Restaurant",
  id: string,
  name?: string | null,
  subdomain?: string | null,
  branding_banner?: string | null,
  branding_color?: string | null,
  chain_id?: string | null,
  Chains?: ModelChainConnection | null,
  categories?: ModelCategoryConnection | null,
  orders?: ModelOrderConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelChainConnection = {
  __typename: "ModelChainConnection",
  items:  Array<Chain | null >,
  nextToken?: string | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  restaurantID: string,
  items?: ModelMenuItemConnection | null,
  createdAt: string,
  updatedAt: string,
  restaurantCategoriesId?: string | null,
};

export type ModelMenuItemConnection = {
  __typename: "ModelMenuItemConnection",
  items:  Array<MenuItem | null >,
  nextToken?: string | null,
};

export type MenuItem = {
  __typename: "MenuItem",
  id: string,
  name: string,
  description: string,
  price: number,
  categoryID: string,
  createdAt: string,
  updatedAt: string,
  categoryItemsId?: string | null,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  items:  Array<OrderItem | null >,
  total: number,
  status: OrderStatus,
  restaurantID: string,
  createdAt: string,
  updatedAt: string,
  restaurantOrdersId?: string | null,
};

export type OrderItem = {
  __typename: "OrderItem",
  menuItemId: string,
  quantity: number,
  price: number,
  name: string,
};

export enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}


export type UpdateRestaurantInput = {
  id: string,
  name?: string | null,
  subdomain?: string | null,
  branding_banner?: string | null,
  branding_color?: string | null,
  chain_id?: string | null,
};

export type DeleteRestaurantInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  restaurantID: string,
  restaurantCategoriesId?: string | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  restaurantID?: ModelIDInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  restaurantCategoriesId?: ModelIDInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  restaurantID?: string | null,
  restaurantCategoriesId?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateMenuItemInput = {
  id?: string | null,
  name: string,
  description: string,
  price: number,
  categoryID: string,
  categoryItemsId?: string | null,
};

export type ModelMenuItemConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  categoryID?: ModelIDInput | null,
  and?: Array< ModelMenuItemConditionInput | null > | null,
  or?: Array< ModelMenuItemConditionInput | null > | null,
  not?: ModelMenuItemConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  categoryItemsId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMenuItemInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  price?: number | null,
  categoryID?: string | null,
  categoryItemsId?: string | null,
};

export type DeleteMenuItemInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  items: Array< OrderItemInput | null >,
  total: number,
  status: OrderStatus,
  restaurantID: string,
  createdAt?: string | null,
  restaurantOrdersId?: string | null,
};

export type OrderItemInput = {
  menuItemId: string,
  quantity: number,
  price: number,
  name: string,
};

export type ModelOrderConditionInput = {
  total?: ModelFloatInput | null,
  status?: ModelOrderStatusInput | null,
  restaurantID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
  updatedAt?: ModelStringInput | null,
  restaurantOrdersId?: ModelIDInput | null,
};

export type ModelOrderStatusInput = {
  eq?: OrderStatus | null,
  ne?: OrderStatus | null,
};

export type UpdateOrderInput = {
  id: string,
  items?: Array< OrderItemInput | null > | null,
  total?: number | null,
  status?: OrderStatus | null,
  restaurantID?: string | null,
  createdAt?: string | null,
  restaurantOrdersId?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type ModelChainFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  branding_banner?: ModelStringInput | null,
  branding_primary_color?: ModelStringInput | null,
  restaurantID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChainFilterInput | null > | null,
  or?: Array< ModelChainFilterInput | null > | null,
  not?: ModelChainFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  subdomain?: ModelStringInput | null,
  branding_banner?: ModelStringInput | null,
  branding_color?: ModelStringInput | null,
  chain_id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelRestaurantFilterInput | null > | null,
  or?: Array< ModelRestaurantFilterInput | null > | null,
  not?: ModelRestaurantFilterInput | null,
};

export type ModelRestaurantConnection = {
  __typename: "ModelRestaurantConnection",
  items:  Array<Restaurant | null >,
  nextToken?: string | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  restaurantID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
  restaurantCategoriesId?: ModelIDInput | null,
};

export type ModelMenuItemFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  categoryID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMenuItemFilterInput | null > | null,
  or?: Array< ModelMenuItemFilterInput | null > | null,
  not?: ModelMenuItemFilterInput | null,
  categoryItemsId?: ModelIDInput | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  total?: ModelFloatInput | null,
  status?: ModelOrderStatusInput | null,
  restaurantID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
  restaurantOrdersId?: ModelIDInput | null,
};

export type ModelSubscriptionChainFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  branding_banner?: ModelSubscriptionStringInput | null,
  branding_primary_color?: ModelSubscriptionStringInput | null,
  restaurantID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChainFilterInput | null > | null,
  or?: Array< ModelSubscriptionChainFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionRestaurantFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  subdomain?: ModelSubscriptionStringInput | null,
  branding_banner?: ModelSubscriptionStringInput | null,
  branding_color?: ModelSubscriptionStringInput | null,
  chain_id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRestaurantFilterInput | null > | null,
  or?: Array< ModelSubscriptionRestaurantFilterInput | null > | null,
  restaurantCategoriesId?: ModelSubscriptionIDInput | null,
  restaurantOrdersId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  restaurantID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  categoryItemsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionMenuItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  categoryID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMenuItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionMenuItemFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  total?: ModelSubscriptionFloatInput | null,
  status?: ModelSubscriptionStringInput | null,
  restaurantID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
};

export type CreateChainMutationVariables = {
  input: CreateChainInput,
  condition?: ModelChainConditionInput | null,
};

export type CreateChainMutation = {
  createChain?:  {
    __typename: "Chain",
    id: string,
    name?: string | null,
    branding_banner?: string | null,
    branding_primary_color?: string | null,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChainMutationVariables = {
  input: UpdateChainInput,
  condition?: ModelChainConditionInput | null,
};

export type UpdateChainMutation = {
  updateChain?:  {
    __typename: "Chain",
    id: string,
    name?: string | null,
    branding_banner?: string | null,
    branding_primary_color?: string | null,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChainMutationVariables = {
  input: DeleteChainInput,
  condition?: ModelChainConditionInput | null,
};

export type DeleteChainMutation = {
  deleteChain?:  {
    __typename: "Chain",
    id: string,
    name?: string | null,
    branding_banner?: string | null,
    branding_primary_color?: string | null,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRestaurantMutationVariables = {
  input: CreateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type CreateRestaurantMutation = {
  createRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name?: string | null,
    subdomain?: string | null,
    branding_banner?: string | null,
    branding_color?: string | null,
    chain_id?: string | null,
    Chains?:  {
      __typename: "ModelChainConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRestaurantMutationVariables = {
  input: UpdateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type UpdateRestaurantMutation = {
  updateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name?: string | null,
    subdomain?: string | null,
    branding_banner?: string | null,
    branding_color?: string | null,
    chain_id?: string | null,
    Chains?:  {
      __typename: "ModelChainConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRestaurantMutationVariables = {
  input: DeleteRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type DeleteRestaurantMutation = {
  deleteRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name?: string | null,
    subdomain?: string | null,
    branding_banner?: string | null,
    branding_color?: string | null,
    chain_id?: string | null,
    Chains?:  {
      __typename: "ModelChainConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    restaurantID: string,
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    restaurantCategoriesId?: string | null,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    restaurantID: string,
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    restaurantCategoriesId?: string | null,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    restaurantID: string,
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    restaurantCategoriesId?: string | null,
  } | null,
};

export type CreateMenuItemMutationVariables = {
  input: CreateMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type CreateMenuItemMutation = {
  createMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    name: string,
    description: string,
    price: number,
    categoryID: string,
    createdAt: string,
    updatedAt: string,
    categoryItemsId?: string | null,
  } | null,
};

export type UpdateMenuItemMutationVariables = {
  input: UpdateMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type UpdateMenuItemMutation = {
  updateMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    name: string,
    description: string,
    price: number,
    categoryID: string,
    createdAt: string,
    updatedAt: string,
    categoryItemsId?: string | null,
  } | null,
};

export type DeleteMenuItemMutationVariables = {
  input: DeleteMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type DeleteMenuItemMutation = {
  deleteMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    name: string,
    description: string,
    price: number,
    categoryID: string,
    createdAt: string,
    updatedAt: string,
    categoryItemsId?: string | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    items:  Array< {
      __typename: "OrderItem",
      menuItemId: string,
      quantity: number,
      price: number,
      name: string,
    } | null >,
    total: number,
    status: OrderStatus,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    restaurantOrdersId?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    items:  Array< {
      __typename: "OrderItem",
      menuItemId: string,
      quantity: number,
      price: number,
      name: string,
    } | null >,
    total: number,
    status: OrderStatus,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    restaurantOrdersId?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    items:  Array< {
      __typename: "OrderItem",
      menuItemId: string,
      quantity: number,
      price: number,
      name: string,
    } | null >,
    total: number,
    status: OrderStatus,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    restaurantOrdersId?: string | null,
  } | null,
};

export type GetChainQueryVariables = {
  id: string,
};

export type GetChainQuery = {
  getChain?:  {
    __typename: "Chain",
    id: string,
    name?: string | null,
    branding_banner?: string | null,
    branding_primary_color?: string | null,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChainsQueryVariables = {
  filter?: ModelChainFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChainsQuery = {
  listChains?:  {
    __typename: "ModelChainConnection",
    items:  Array< {
      __typename: "Chain",
      id: string,
      name?: string | null,
      branding_banner?: string | null,
      branding_primary_color?: string | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChainsByRestaurantIDQueryVariables = {
  restaurantID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChainFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChainsByRestaurantIDQuery = {
  chainsByRestaurantID?:  {
    __typename: "ModelChainConnection",
    items:  Array< {
      __typename: "Chain",
      id: string,
      name?: string | null,
      branding_banner?: string | null,
      branding_primary_color?: string | null,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRestaurantQueryVariables = {
  id: string,
};

export type GetRestaurantQuery = {
  getRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name?: string | null,
    subdomain?: string | null,
    branding_banner?: string | null,
    branding_color?: string | null,
    chain_id?: string | null,
    Chains?:  {
      __typename: "ModelChainConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRestaurantsQueryVariables = {
  filter?: ModelRestaurantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRestaurantsQuery = {
  listRestaurants?:  {
    __typename: "ModelRestaurantConnection",
    items:  Array< {
      __typename: "Restaurant",
      id: string,
      name?: string | null,
      subdomain?: string | null,
      branding_banner?: string | null,
      branding_color?: string | null,
      chain_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    restaurantID: string,
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    restaurantCategoriesId?: string | null,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      restaurantCategoriesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CategoriesByRestaurantIDQueryVariables = {
  restaurantID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CategoriesByRestaurantIDQuery = {
  categoriesByRestaurantID?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      restaurantCategoriesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMenuItemQueryVariables = {
  id: string,
};

export type GetMenuItemQuery = {
  getMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    name: string,
    description: string,
    price: number,
    categoryID: string,
    createdAt: string,
    updatedAt: string,
    categoryItemsId?: string | null,
  } | null,
};

export type ListMenuItemsQueryVariables = {
  filter?: ModelMenuItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenuItemsQuery = {
  listMenuItems?:  {
    __typename: "ModelMenuItemConnection",
    items:  Array< {
      __typename: "MenuItem",
      id: string,
      name: string,
      description: string,
      price: number,
      categoryID: string,
      createdAt: string,
      updatedAt: string,
      categoryItemsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MenuItemsByCategoryIDQueryVariables = {
  categoryID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMenuItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MenuItemsByCategoryIDQuery = {
  menuItemsByCategoryID?:  {
    __typename: "ModelMenuItemConnection",
    items:  Array< {
      __typename: "MenuItem",
      id: string,
      name: string,
      description: string,
      price: number,
      categoryID: string,
      createdAt: string,
      updatedAt: string,
      categoryItemsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    items:  Array< {
      __typename: "OrderItem",
      menuItemId: string,
      quantity: number,
      price: number,
      name: string,
    } | null >,
    total: number,
    status: OrderStatus,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    restaurantOrdersId?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      total: number,
      status: OrderStatus,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      restaurantOrdersId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OrdersByRestaurantIDQueryVariables = {
  restaurantID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByRestaurantIDQuery = {
  ordersByRestaurantID?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      total: number,
      status: OrderStatus,
      restaurantID: string,
      createdAt: string,
      updatedAt: string,
      restaurantOrdersId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateChainSubscriptionVariables = {
  filter?: ModelSubscriptionChainFilterInput | null,
};

export type OnCreateChainSubscription = {
  onCreateChain?:  {
    __typename: "Chain",
    id: string,
    name?: string | null,
    branding_banner?: string | null,
    branding_primary_color?: string | null,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChainSubscriptionVariables = {
  filter?: ModelSubscriptionChainFilterInput | null,
};

export type OnUpdateChainSubscription = {
  onUpdateChain?:  {
    __typename: "Chain",
    id: string,
    name?: string | null,
    branding_banner?: string | null,
    branding_primary_color?: string | null,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChainSubscriptionVariables = {
  filter?: ModelSubscriptionChainFilterInput | null,
};

export type OnDeleteChainSubscription = {
  onDeleteChain?:  {
    __typename: "Chain",
    id: string,
    name?: string | null,
    branding_banner?: string | null,
    branding_primary_color?: string | null,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
};

export type OnCreateRestaurantSubscription = {
  onCreateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name?: string | null,
    subdomain?: string | null,
    branding_banner?: string | null,
    branding_color?: string | null,
    chain_id?: string | null,
    Chains?:  {
      __typename: "ModelChainConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
};

export type OnUpdateRestaurantSubscription = {
  onUpdateRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name?: string | null,
    subdomain?: string | null,
    branding_banner?: string | null,
    branding_color?: string | null,
    chain_id?: string | null,
    Chains?:  {
      __typename: "ModelChainConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRestaurantSubscriptionVariables = {
  filter?: ModelSubscriptionRestaurantFilterInput | null,
};

export type OnDeleteRestaurantSubscription = {
  onDeleteRestaurant?:  {
    __typename: "Restaurant",
    id: string,
    name?: string | null,
    subdomain?: string | null,
    branding_banner?: string | null,
    branding_color?: string | null,
    chain_id?: string | null,
    Chains?:  {
      __typename: "ModelChainConnection",
      nextToken?: string | null,
    } | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      nextToken?: string | null,
    } | null,
    orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    restaurantID: string,
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    restaurantCategoriesId?: string | null,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    restaurantID: string,
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    restaurantCategoriesId?: string | null,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    restaurantID: string,
    items?:  {
      __typename: "ModelMenuItemConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    restaurantCategoriesId?: string | null,
  } | null,
};

export type OnCreateMenuItemSubscriptionVariables = {
  filter?: ModelSubscriptionMenuItemFilterInput | null,
};

export type OnCreateMenuItemSubscription = {
  onCreateMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    name: string,
    description: string,
    price: number,
    categoryID: string,
    createdAt: string,
    updatedAt: string,
    categoryItemsId?: string | null,
  } | null,
};

export type OnUpdateMenuItemSubscriptionVariables = {
  filter?: ModelSubscriptionMenuItemFilterInput | null,
};

export type OnUpdateMenuItemSubscription = {
  onUpdateMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    name: string,
    description: string,
    price: number,
    categoryID: string,
    createdAt: string,
    updatedAt: string,
    categoryItemsId?: string | null,
  } | null,
};

export type OnDeleteMenuItemSubscriptionVariables = {
  filter?: ModelSubscriptionMenuItemFilterInput | null,
};

export type OnDeleteMenuItemSubscription = {
  onDeleteMenuItem?:  {
    __typename: "MenuItem",
    id: string,
    name: string,
    description: string,
    price: number,
    categoryID: string,
    createdAt: string,
    updatedAt: string,
    categoryItemsId?: string | null,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    items:  Array< {
      __typename: "OrderItem",
      menuItemId: string,
      quantity: number,
      price: number,
      name: string,
    } | null >,
    total: number,
    status: OrderStatus,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    restaurantOrdersId?: string | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    items:  Array< {
      __typename: "OrderItem",
      menuItemId: string,
      quantity: number,
      price: number,
      name: string,
    } | null >,
    total: number,
    status: OrderStatus,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    restaurantOrdersId?: string | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    items:  Array< {
      __typename: "OrderItem",
      menuItemId: string,
      quantity: number,
      price: number,
      name: string,
    } | null >,
    total: number,
    status: OrderStatus,
    restaurantID: string,
    createdAt: string,
    updatedAt: string,
    restaurantOrdersId?: string | null,
  } | null,
};
