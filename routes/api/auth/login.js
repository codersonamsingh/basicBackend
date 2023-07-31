const express = require("express")
const router = express.Router();


router.get("/sendOtp", (req,res)=> {
    res.json({
        message:"otp send",
        varient:"success"

    })

})

module.exports = router


