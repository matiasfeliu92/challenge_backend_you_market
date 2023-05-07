const checkMutation = require("../utils/checkMutation")

class MutationController {
    async verifyMutation(req, res) {
        const {chain} = req.body   //'AUGAUCUCG'
        const mutation = checkMutation(chain)
        if (mutation) {
            res.status(200).json({message: `the chain ${chain} has mutation`})
        } else {
            res.status(403).json({message: `the received chain ${chain} hasn't mutation`})
        }
    }
}

module.exports = MutationController