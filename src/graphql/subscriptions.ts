/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateChain = /* GraphQL */ `subscription OnCreateChain($filter: ModelSubscriptionChainFilterInput) {
  onCreateChain(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChainSubscriptionVariables,
  APITypes.OnCreateChainSubscription
>;
export const onUpdateChain = /* GraphQL */ `subscription OnUpdateChain($filter: ModelSubscriptionChainFilterInput) {
  onUpdateChain(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChainSubscriptionVariables,
  APITypes.OnUpdateChainSubscription
>;
export const onDeleteChain = /* GraphQL */ `subscription OnDeleteChain($filter: ModelSubscriptionChainFilterInput) {
  onDeleteChain(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChainSubscriptionVariables,
  APITypes.OnDeleteChainSubscription
>;
export const onCreateRestaurant = /* GraphQL */ `subscription OnCreateRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
) {
  onCreateRestaurant(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRestaurantSubscriptionVariables,
  APITypes.OnCreateRestaurantSubscription
>;
export const onUpdateRestaurant = /* GraphQL */ `subscription OnUpdateRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
) {
  onUpdateRestaurant(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRestaurantSubscriptionVariables,
  APITypes.OnUpdateRestaurantSubscription
>;
export const onDeleteRestaurant = /* GraphQL */ `subscription OnDeleteRestaurant(
  $filter: ModelSubscriptionRestaurantFilterInput
) {
  onDeleteRestaurant(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRestaurantSubscriptionVariables,
  APITypes.OnDeleteRestaurantSubscription
>;
export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onCreateMenuItem = /* GraphQL */ `subscription OnCreateMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
  onCreateMenuItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMenuItemSubscriptionVariables,
  APITypes.OnCreateMenuItemSubscription
>;
export const onUpdateMenuItem = /* GraphQL */ `subscription OnUpdateMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
  onUpdateMenuItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMenuItemSubscriptionVariables,
  APITypes.OnUpdateMenuItemSubscription
>;
export const onDeleteMenuItem = /* GraphQL */ `subscription OnDeleteMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
  onDeleteMenuItem(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMenuItemSubscriptionVariables,
  APITypes.OnDeleteMenuItemSubscription
>;
export const onCreateOrder = /* GraphQL */ `subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onCreateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOrderSubscriptionVariables,
  APITypes.OnCreateOrderSubscription
>;
export const onUpdateOrder = /* GraphQL */ `subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onUpdateOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOrderSubscriptionVariables,
  APITypes.OnUpdateOrderSubscription
>;
export const onDeleteOrder = /* GraphQL */ `subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
  onDeleteOrder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOrderSubscriptionVariables,
  APITypes.OnDeleteOrderSubscription
>;
