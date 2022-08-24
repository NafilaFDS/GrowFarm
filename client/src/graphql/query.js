import { gql } from "@apollo/client";

export const HELLO = gql`
query hello{
   hello
}
`
export const FARMERS_LIST = gql`
query{
   farmersList {
    _id
    name
    address
    mobile
    email
    createdAt
  }
}
`
export const BUYERS_LIST = gql`
query{
   buyersList {
    _id
    name
    address
    mobile
    email
    createdAt
  }
}
`
export const MY_PROFILE = gql`
query{
  myProfile{
    name
    address
    email
    mobile
    userType
  }
}
`
export const MY_ADVERTISE = gql`
query{
  myAdvertise{
    _id
    name
    image
    location
    quantity
    status
    createdAt
  }
}
`
export const MY_ADVERTISE_RESPONSE = gql`
query sellHistory($advId: ID!){
  sellHistory(advId: $advId) {
    _id
    quantity
    price
    farmer {
      _id
      name
      mobile
      email
      address
    }
    paymentStatus
    createdAt
  }
}`

export const ADVERTISE_APPROVAL = gql`
query{
  advertiseApproval{
    _id
    name
    image
    location
    quantity
    status
    createdAt
    buyer{
      _id
      name
      address
      mobile
      email
    }
    response{
      _id
      quantity
      price
      paymentStatus
      farmer{
        name
        mobile
        email
        address
      }
    }
  }
}
`
export const CROP_ADVERTISE = gql`
query{
  cropAdvertise{
    _id
    name
    image
    location
    quantity
    status
    createdAt
    buyer{
      _id
      name
      address
      mobile
      email
    }
    response{
      _id
      quantity
      price
      paymentStatus
      farmer{
        name
        mobile
        email
        address
      }
    }
  }
}
`
export const MY_RESPONSE = gql`
query myResponse($advId: ID!){
  myResponse(advId: $advId) {
    _id
    quantity
    price
    paymentStatus
    createdAt
  }
}`
export const GET_ADMIN_SETTINGS = gql`
query {
  getAdminSettings {
    commissionAmount
  }
}`
export const GET_COMMISSION_VALUE = gql`
query {
  getCommissionValue 
}`