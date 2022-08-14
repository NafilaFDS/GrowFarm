const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./gql/typeDefs");
const resolvers = require("./gql/resolvers");
const mongoose = require("mongoose");
const isAuth = require("./middleware/is-auth");
const { graphqlUploadExpress } = require("graphql-upload");
const cors = require("cors");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

async function startServer() {
    const app = express();

    //-----------------------authorization-----------------
    // app.use(isAuth);
    app.use(isAuth);
    app.use(express.static('public'))
    app.use(cors())
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => {
            return req;
        }
    });

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
    app.use(bodyParser.json())
    await apolloServer.start();

    app.use(graphqlUploadExpress());
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