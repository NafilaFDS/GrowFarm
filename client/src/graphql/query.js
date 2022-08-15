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
  }
}
`