const { gql } = require("apollo-server-express");

const typeDefs = gql`
    scalar Upload
    type File {
        url: String!
    }
    type User{
        _id: ID!
        name: String!
        mobile: String!
        email: String
        password: String
        address: String!
        userType: Int!
        createdAt: String!
        updatedAt: String!
    }
    type Advertise{
        _id: ID!
        name: String!
        image: String!
        location: String 
        quantity: Int! 
        buyer: User!
        createdAt: String!
        updatedAt: String!
    }
    type AuthData {
        userId: ID!
        me: User!
        token : String!
        tokenExpiration: Int!
    }
    type Message{
       status: Int!
       message: String!
    }
    type Query{
        hello: String
        farmersList:[User]
        buyersList:[User]
        advertiseList: [Advertise]
    }

    input userInput {
        name: String!
        mobile: String!
        email: String 
        password: String! 
        address: String! 
        userType: Int!
    }
    input advertiseInput {
        name: String!
        image: String!
        location: String 
        quantity: Int! 
    }
    type Mutation {
        createUser(user: userInput): User
        login(mobile: String!, password: String!): AuthData!
        uploadFile(file: Upload!): File!
        postAdvertise(advertise: advertiseInput ): Advertise!
    }
`
module.exports = typeDefs