// export the function as a module
module.exports = function() {
    const express = require('express');


    let nbCall = 0; // to count the number of calls to the API

    const router = express.Router();
    router.get('/', (req, res) => {
        res.json({message: "Nothing to see here"});
        console.log("[Nothing] Appel n°" + nbCall++);
    });

    // return the express app with the route
    return router;
};