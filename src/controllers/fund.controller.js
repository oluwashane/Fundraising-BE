const Fund = require('../models/fund.model');

exports.test = function (req, res) {
    res.send('Greetings from the test controller');
}

const donate = async (req, res) => {
    const fund = new Fund(req.body);
    try {
        await fund.save();
        res.status(201).send(fund);
    } catch(e) {
        res.status(400).send(e);
    }
}

const totalFund = async (req, res) => {
    try {
        const sumFund = await Fund.find({});
        res.status(200).send(sumFund);

    } catch (e) {
        res.status(500).send(e);
    }
}

// coming soon

// const update_fund = async (req, res) => {
//     try {
//         const updates = Object.keys(req.body);
//         const allowedUpdates = ['email', 'phone', 'amount'];
//         const isValidOperation = updates.every((update) => {
//             return allowedUpdates.includes(update)
//         })

//         if(!isValidOperation) {
//             return res.status(400).send({error: 'invalid updates'})
//         }

//         try {
//             const user = await Fund.findByIdAndUpdate(req.params.id, );
//         }

//     } catch (e) {
//         res.sendStatus(400)
//     }
// }

// const cancel_fund = async () => {

// }

module.exports = {
    donate,
    totalFund,
    update_fund,
    cancel_fund
}

