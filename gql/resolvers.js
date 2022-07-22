const { gql } = require("apollo-server-express");
const User = require("../models/User")
const resolvers = {
    Query: {
        hello: () => {
            return "hello server"
        },
        allUser: async () => {
            return await User.find();
        }
    }
}
module.exports = resolvers