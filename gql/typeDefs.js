const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User{
    _id: ID!
    name: String!
    mobile: String!
    email: String
    address: String!
    userType: String!
    createdAt: String!
    updatedAt: String!
}
type Query{
    hello: String
    allUser:[User]
}
`
module.exports = typeDefs