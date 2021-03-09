let typedef  = `

  type User {
    id: ID!
    name: String!
    email: String!
  
  }
  type Post {
    id: ID!
    title: String
    description: String!
    user_id: ID!
    
  }
  type Query {
    posts: [Post!]!
    post(id: ID!): Post
    user(id: ID!): User
    users: [User!]!
  }
 
`;

module.exports =  typedef;