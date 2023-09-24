const router = require('express').Router();

router.post('/',(req,res)=>{
    res.status(200).send('logout')
})

module.exports = router;