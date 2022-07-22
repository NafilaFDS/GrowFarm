const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./gql/typeDefs");
const resolvers = require("./gql/resolvers");
const mongoose = require("mongoose")


async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: app });

    app.use((req, res) => {
        res.send("hello")
    })

    await mongoose.connect("mongodb://localhost:27017/grow_farm", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("mongoose connected............");

    app.listen(4000, () => console.log("server is running on port 4000."))
}
startServer()