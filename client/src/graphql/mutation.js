import { gql } from "@apollo/client";

export const SIGNUP = gql`
    mutation createUser(
        $name: String!
        $mobile: String!
        $email : String!
        $password: String!
        $address: String!
        $userType: Int!
    ) {
        createUser(user:{
            name:  $name
            mobile:  $mobile
            email: $email
            password :$password
            address: $address
            userType: $userType
          } )
          {
            _id
            name
            mobile
            email
            password
            address
            userType
            createdAt
            updatedAt
          }
          
    }
   
`;
export const LOGIN = gql`
    mutation login(
        $mobile: String!
        $password: String!
    ){
        login(
            mobile: $mobile
            password: $password
            ){
                token
                me{
                    userType
                }
            }
    }
   
`;
export const UPLOAD_FILE = gql`
mutation uploadFile($file:Upload!){
    uploadFile(file: $file){
        url
    }
}
`
export const POST_ADVERTISE = gql`
    mutation postAdvertise(
        $name: String!
        $location: String!
        $image: String!
        $quantity: Int!
    ) {
        postAdvertise(
            advertise:{
            name:  $name
            location:  $location
            image: $image
            quantity :$quantity
          } 
        ) {
            name
            image
            quantity
          }
    }
`;
export const DELETE_USER = gql`
    mutation deleteUser(
        $id: ID!
    ) {
        deleteUser(
           id: $id
        ) {
            message
          }
    }
`;
export const EDIT_USER = gql`
    mutation editUser(
       $name: String
       $mobile: String
       $email: String
       $address: String
    ) {
        editUser(
           name: $name
           mobile: $mobile
           email: $email
           address: $address
        ) {
            name
            mobile
            email
            address
          }
    }
`;
export const UPDATE_APPROVE_ADVERTISE = gql`
    mutation updateAdvStatus(
        $id: ID!
        $status: String!
    ) {
        updateAdvStatus(
           id: $id
           status: $status
        ) {
            message
          }
    }
`;
export const CREATE_SALE = gql`
    mutation createSale(
        $advId: ID!
        $quantity: Int!
        $price: Int!
    ) {
        createSale(
           advId: $advId
           quantity: $quantity
           price: $price
        ) {
            _id
          }
    }
`;
export const TEST = gql`
    mutation {
        test
    }
`;
export const MAKE_PAYMENT = gql`
    mutation makePayment(
        $totalAmount:Int! 
        $productName: String!
        $cusName: String!
        $cusEmail: String! 
        $cusAdd1: String! 
        $cusPhone: String!
        $advId: ID!
    ) {
        makePayment(
            payment:{
            totalAmount:  $totalAmount
            productName: $productName
            cusName:  $cusName
            cusEmail: $cusEmail
            cusAdd1 :$cusAdd1
            cusPhone :$cusPhone
            advId :$advId
          } 
        ) {
            url
          }
    }
`;