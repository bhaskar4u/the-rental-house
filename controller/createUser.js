const registerUserService = require('../services/UserService');
const { RegisterUser } = require('../services/UserService')


module.exports = {
    AddUser: async (req, res) => {
        const payload = req.body;
        try {
            const userData = await RegisterUser(payload)
            console.log(userData.name);
            res.send({
                data: userData,
                message: "data stored"
            })

        } catch (err) {
            res.send({
                err: err
            })
        }
    }
}