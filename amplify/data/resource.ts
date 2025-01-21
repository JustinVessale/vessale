import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Restaurant: a
    .model({
      id: a.id(),
      name: a.string(),
      subdomain: a.string(),
      branding_banner: a.string(),
      branding_color: a.string(), 
      chain_id: a.id(),
      categories: a.hasMany("Category", 'id'),
      createdAt: a.datetime(),
      updatedAt: a.datetime()
    })
    .authorization(allow => [allow.publicApiKey()]),
 
  Category: a
    .model({
      id: a.id(),
      name: a.string().required(),
      restaurantID: a.string().required(),
      items: a.hasMany('MenuItem', 'id'),
      createdAt: a.datetime(),
      updatedAt: a.datetime(),
      restaurantCategoriesId: a.string()
    })
    .authorization(allow => [allow.publicApiKey()]),
 
  MenuItem: a
    .model({
      id: a.id(),
      name: a.string().required(),
      description: a.string().required(),
      price: a.float().required(),
      categoryID: a.string().required(), 
      createdAt: a.datetime(),
      updatedAt: a.datetime(),
      categoryItemsId: a.string()
    })
    .authorization(allow => [allow.publicApiKey()])
 });
export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
