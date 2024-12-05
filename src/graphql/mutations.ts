/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createChain = /* GraphQL */ `mutation CreateChain(
  $input: CreateChainInput!
  $condition: ModelChainConditionInput
) {
  createChain(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateChainMutationVariables,
  APITypes.CreateChainMutation
>;
export const updateChain = /* GraphQL */ `mutation UpdateChain(
  $input: UpdateChainInput!
  $condition: ModelChainConditionInput
) {
  updateChain(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateChainMutationVariables,
  APITypes.UpdateChainMutation
>;
export const deleteChain = /* GraphQL */ `mutation DeleteChain(
  $input: DeleteChainInput!
  $condition: ModelChainConditionInput
) {
  deleteChain(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteChainMutationVariables,
  APITypes.DeleteChainMutation
>;
export const createRestaurant = /* GraphQL */ `mutation CreateRestaurant(
  $input: CreateRestaurantInput!
  $condition: ModelRestaurantConditionInput
) {
  createRestaurant(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRestaurantMutationVariables,
  APITypes.CreateRestaurantMutation
>;
export const updateRestaurant = /* GraphQL */ `mutation UpdateRestaurant(
  $input: UpdateRestaurantInput!
  $condition: ModelRestaurantConditionInput
) {
  updateRestaurant(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRestaurantMutationVariables,
  APITypes.UpdateRestaurantMutation
>;
export const deleteRestaurant = /* GraphQL */ `mutation DeleteRestaurant(
  $input: DeleteRestaurantInput!
  $condition: ModelRestaurantConditionInput
) {
  deleteRestaurant(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRestaurantMutationVariables,
  APITypes.DeleteRestaurantMutation
>;
export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $input: CreateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  createCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $input: UpdateCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  updateCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $input: DeleteCategoryInput!
  $condition: ModelCategoryConditionInput
) {
  deleteCategory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const createMenuItem = /* GraphQL */ `mutation CreateMenuItem(
  $input: CreateMenuItemInput!
  $condition: ModelMenuItemConditionInput
) {
  createMenuItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMenuItemMutationVariables,
  APITypes.CreateMenuItemMutation
>;
export const updateMenuItem = /* GraphQL */ `mutation UpdateMenuItem(
  $input: UpdateMenuItemInput!
  $condition: ModelMenuItemConditionInput
) {
  updateMenuItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMenuItemMutationVariables,
  APITypes.UpdateMenuItemMutation
>;
export const deleteMenuItem = /* GraphQL */ `mutation DeleteMenuItem(
  $input: DeleteMenuItemInput!
  $condition: ModelMenuItemConditionInput
) {
  deleteMenuItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMenuItemMutationVariables,
  APITypes.DeleteMenuItemMutation
>;
export const createOrder = /* GraphQL */ `mutation CreateOrder(
  $input: CreateOrderInput!
  $condition: ModelOrderConditionInput
) {
  createOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOrderMutationVariables,
  APITypes.CreateOrderMutation
>;
export const updateOrder = /* GraphQL */ `mutation UpdateOrder(
  $input: UpdateOrderInput!
  $condition: ModelOrderConditionInput
) {
  updateOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOrderMutationVariables,
  APITypes.UpdateOrderMutation
>;
export const deleteOrder = /* GraphQL */ `mutation DeleteOrder(
  $input: DeleteOrderInput!
  $condition: ModelOrderConditionInput
) {
  deleteOrder(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOrderMutationVariables,
  APITypes.DeleteOrderMutation
>;
