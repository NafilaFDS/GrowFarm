const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./gql/typeDefs");
const resolvers = require("./gql/resolvers");
const mongoose = require("mongoose");
const isAuth = require("./middleware/is-auth");
const { graphqlUploadExpress } = require("graphql-upload");
const cors = require("cors");
const bodyParser = require('body-parser');
require('dotenv').config()
const SSLCommerzPayment = require("sslcommerz-lts");
const Sell = require("./models/Sell");
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//---------------------SSL Commerz-------------------------
let rootV
app.get('/', async (req, res) => {
    /** 
    * Root url response 
    */
    //console.log(req.get('host'))
    rootV = req.protocol + "://" + req.headers.host
    console.log("rootV", rootV);
    return res.status(200).json({
        message: "Welcome to Grow Farm App",
        url: `${rootV}/ssl-request`
    })
})

app.get('/ssl-request', async (req, res) => {
    /** 
    * Create ssl session request 
    */
    //console.log("req.query", req.query);
    const { totalAmount, productName, cusName, cusEmail, cusAdd1, cusPhone, advId } = req.query;
    const data = {
        total_amount: +totalAmount,
        currency: 'BDT',
        tran_id: 'REF123',
        success_url: `${rootV}/ssl-payment-success?id=${advId}`,
        fail_url: `${rootV}/ssl-payment-fail`,
        cancel_url: `${rootV}/ssl-payment-cancel`,
        shipping_method: 'No',
        product_name: productName,
        product_category: 'Farm',
        product_profile: 'general',
        cus_name: cusName,
        cus_email: cusEmail,
        cus_add1: cusAdd1,
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: cusPhone,
        cus_fax: '01711111111',
        multi_card_name: 'mastercard',
        value_a: 'ref001_A',
        value_b: 'ref002_B',
        value_c: 'ref003_C',
        value_d: 'ref004_D',
        ipn_url: `${rootV}/ssl-payment-notification`,
    };
    const sslcommerz = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASSWORD, false) //true for live default false for sandbox
    sslcommerz.init(data).then(data => {

        //process the response that got from sslcommerz 
        //https://developer.sslcommerz.com/doc/v4/#returned-parameters

        if (data?.GatewayPageURL) {
            return res.status(200).redirect(data?.GatewayPageURL);
        }
        else {
            return res.status(400).json({
                message: "Session was not successful"
            });
        }
    });

});

app.post("/ssl-payment-notification", async (req, res) => {

    /** 
    * If payment notification
    */

    return res.status(200).json(
        {
            data: req.body,
            message: 'Payment notification'
        }
    );
})

app.post("/ssl-payment-success", async (req, res) => {

    /** 
    * If payment successful 
    */
    await Sell.findByIdAndUpdate(
        req.query.id,
        {
            $set: {
                paymentStatus: "Paid"
            }
        }
    )
    res.redirect('https://incredible-blancmange-79fe5d.netlify.app/payment-success');
    return res.status(200).json(
        {
            data: req.body,
            message: 'Payment success'
        }
    );
})

app.post("/ssl-payment-fail", async (req, res) => {

    /** 
    * If payment failed 
    */
    res.redirect('https://incredible-blancmange-79fe5d.netlify.app/payment-fail');
    return res.status(200).json(
        {
            data: req.body,
            message: 'Payment failed'
        }
    );
})

app.post("/ssl-payment-cancel", async (req, res) => {

    /** 
    * If payment cancelled 
    */
    res.redirect('https://incredible-blancmange-79fe5d.netlify.app/payment-cancel');
    return res.status(200).json(
        {
            data: req.body,
            message: 'Payment cancelled'
        }
    );
})


async function startServer() {

    //-----------------------authorization-----------------
    // app.use(isAuth);
    app.use(isAuth);
    app.use(express.static('public'))
    // cors origin URL - Allow inbound traffic from origin
    // corsOptions = {
    //     origin: "http://localhost:3000",
    //     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    // };
    app.use(cors());
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => {
            return req;
        }
    });


    await apolloServer.start();

    app.use(graphqlUploadExpress());
    apolloServer.applyMiddleware({ app: app });

    app.use((req, res) => {
        res.send("hello")
    })

    //-------------------local db-----------------------
    // await mongoose.connect("mongodb://localhost:27017/grow_farm", {
    //     useUnifiedTopology: true,
    //     useNewUrlParser: true
    // });
    // app.listen(4000, () => console.log("server is running on port 4000."))
    // const dbo = require("./db/connection");

    // app.listen(4000, () => {
    //     // perform a database connection when server starts
    //     dbo.connectToServer(function (err) {
    //         if (err) console.error(err);
    //     })
    //     console.log(`Server is running on port: 4000`);
    // });
    mongoose.connect(`${process.env.MONGO_URL}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
        .then((data) => {
            console.log("first mongo connected at port 4000");
            app.listen(process.env.PORT || 4000);
        }).catch(err => {
            console.log(err);
        })

}
startServer()