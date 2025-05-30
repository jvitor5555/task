const express = require('express');
const router = express.Router();

router.get('/' , (req, res) => {

    res.send('API funcionando') // rota para testar a API
})

    
module.exports = router