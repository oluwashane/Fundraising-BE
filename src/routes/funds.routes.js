const express = require('express');
const router = express.Router();

const {donate, funds, update_fund, cancel_fund} = require('../controllers/fund.controller');

router.post('/donate', donate);
router.get('/totalfund', totalFund);

// coming soon
// router.put('/:id/update', update_fund);
// router.delete('/cancel', cancel_fund);

module.exports = router;