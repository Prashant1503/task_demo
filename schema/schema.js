const {gql} =require('apollo-server-express');

const typeDef  = gql `

    // schema of user
    type User {
        id : Int!;
        name : String!;
        email : String!;
        menu : [Receipe!]
    }
    // schema of user
    type Receipe {
        id : Int!;
        title : String!;
        ingredients : String!;
        direction : String!;
        user : user!
    }

    // query used for fetching data.
    type Query {
        user(id : Int!) : User;
        allUsers() : [User !];
        allReceipe : [Receipe !];
        receipe(id : Int!) : Receipe;
    }

    // mutation used for creating,deleting or updating.
    type Mutation {
        createUser(name : String!,email : String!,password : String!): User!;
        createReceipe(userId : Int!,title : String!,direction : String!,ingredients : String!) : Receipe!;

    }
`