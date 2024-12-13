/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getChain = /* GraphQL */ `query GetChain($id: ID!) {
  getChain(id: $id) {
    id
    name
    branding_banner
    branding_primary_color
    restaurantID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetChainQueryVariables, APITypes.GetChainQuery>;
export const listChains = /* GraphQL */ `query ListChains(
  $filter: ModelChainFilterInput
  $limit: Int
  $nextToken: String
) {
  listChains(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      branding_banner
      branding_primary_color
      restaurantID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChainsQueryVariables,
  APITypes.ListChainsQuery
>;
export const chainsByRestaurantID = /* GraphQL */ `query ChainsByRestaurantID(
  $restaurantID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelChainFilterInput
  $limit: Int
  $nextToken: String
) {
  chainsByRestaurantID(
    restaurantID: $restaurantID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      branding_banner
      branding_primary_color
      restaurantID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChainsByRestaurantIDQueryVariables,
  APITypes.ChainsByRestaurantIDQuery
>;
export const getRestaurant = /* GraphQL */ `query GetRestaurant($id: ID!) {
  getRestaurant(id: $id) {
    id
    name
    subdomain
    branding_banner
    branding_color
    chain_id
    Chains {
      nextToken
      __typename
    }
    categories {
      nextToken
      __typename
    }
    orders {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRestaurantQueryVariables,
  APITypes.GetRestaurantQuery
>;
export const listRestaurants = /* GraphQL */ `query ListRestaurants(
  $filter: ModelRestaurantFilterInput
  $limit: Int
  $nextToken: String
) {
  listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      subdomain
      branding_banner
      branding_color
      chain_id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRestaurantsQueryVariables,
  APITypes.ListRestaurantsQuery
>;
export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    id
    name
    restaurantID
    items {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    restaurantCategoriesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      restaurantID
      createdAt
      updatedAt
      restaurantCategoriesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const categoriesByRestaurantID = /* GraphQL */ `query CategoriesByRestaurantID(
  $restaurantID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  categoriesByRestaurantID(
    restaurantID: $restaurantID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      restaurantID
      createdAt
      updatedAt
      restaurantCategoriesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CategoriesByRestaurantIDQueryVariables,
  APITypes.CategoriesByRestaurantIDQuery
>;
export const getMenuItem = /* GraphQL */ `query GetMenuItem($id: ID!) {
  getMenuItem(id: $id) {
    id
    name
    description
    price
    categoryID
    createdAt
    updatedAt
    categoryItemsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMenuItemQueryVariables,
  APITypes.GetMenuItemQuery
>;
export const listMenuItems = /* GraphQL */ `query ListMenuItems(
  $filter: ModelMenuItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listMenuItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      price
      categoryID
      createdAt
      updatedAt
      categoryItemsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMenuItemsQueryVariables,
  APITypes.ListMenuItemsQuery
>;
export const menuItemsByCategoryID = /* GraphQL */ `query MenuItemsByCategoryID(
  $categoryID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMenuItemFilterInput
  $limit: Int
  $nextToken: String
) {
  menuItemsByCategoryID(
    categoryID: $categoryID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      price
      categoryID
      createdAt
      updatedAt
      categoryItemsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MenuItemsByCategoryIDQueryVariables,
  APITypes.MenuItemsByCategoryIDQuery
>;
export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    items {
      menuItemId
      quantity
      price
      name
      __typename
    }
    total
    status
    restaurantID
    createdAt
    updatedAt
    restaurantOrdersId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      total
      status
      restaurantID
      createdAt
      updatedAt
      restaurantOrdersId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const ordersByRestaurantID = /* GraphQL */ `query OrdersByRestaurantID(
  $restaurantID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByRestaurantID(
    restaurantID: $restaurantID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      total
      status
      restaurantID
      createdAt
      updatedAt
      restaurantOrdersId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByRestaurantIDQueryVariables,
  APITypes.OrdersByRestaurantIDQuery
>;
