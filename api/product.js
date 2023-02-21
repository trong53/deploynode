const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    try {
        res.json({
            status: 200,
            message: "Get data has successfully"
        });
    }catch (error) {
        console.log(error);
        return res.status(500).send("server error");
    }
});
module.exports = router ;