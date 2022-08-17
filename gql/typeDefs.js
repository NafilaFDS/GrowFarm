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
        status: String
        response: [Sell]!
        createdAt: String!
        updatedAt: String!
    }
    type Sell{
        _id: ID!
        quantity: Int! 
        price: Int! 
        farmer: User!
        paymentStatus: String
        advertise: Advertise
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
    type PaymentResponse{
      url: String!
    }
    type Query{
        hello: String
        farmersList:[User]
        buyersList:[User]
        advertiseApproval: [Advertise]
        myProfile: User
        myAdvertise: [Advertise]
        cropAdvertise: [Advertise]
        myResponse(advId: ID!): [Sell]
        sellHistory(advId: ID!): [Sell]
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
    input paymentInput {
        totalAmount:Int! 
        productName: String!
        cusName: String!
        cusEmail: String! 
        cusAdd1: String! 
        cusPhone: String!
        advId: ID!
    }
    type Mutation {
        createUser(user: userInput): User
        login(mobile: String!, password: String!): AuthData!
        uploadFile(file: Upload!): File!
        postAdvertise(advertise: advertiseInput ): Advertise!
        deleteUser(id: ID!): Message!
        editUser(name: String, mobile: String, email: String, address: String): User!
        updateAdvStatus(id: ID!, status: String!): Message! 
        createSale(advId: ID!, quantity: Int!, price: Int!): Sell
        updateSale(saleId: ID!): Message! 
        makePayment(payment:paymentInput): PaymentResponse!
        delWhAdv: Advertise
    }
`
module.exports = typeDefs