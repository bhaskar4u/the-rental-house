const User = require('../model/User');

module.exports = {
    RegisterUser: async (data) => {
        try {
            // const user = new User
            return await User.create(data)
        } catch (err) {
            throw err
        }
    }
}