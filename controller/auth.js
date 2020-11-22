const Bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const { UserFindOne } = require('../services/UserService')

const secretKey = process.env.SecretKey || "SecretKey_121"

module.exports = {
    Login: async (req, res) => {
        const user = await UserFindOne({ email: req.body.email })

        try {
            if (user) {
                if (Bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        name: user.name,
                        email: user.email
                    }
                    let token = JWT.sign(payload, secretKey, {
                        expiresIn: '2d'
                    })
                    res.send({
                        status: 200,
                        message: "login successfully",
                        token: token
                    })
                } else {
                    res.send({
                        status: 400,
                        message: "Invalid Password"
                    })
                }
            } else {
                res.send({
                    status: 400,
                    message: "Invalid Credentials"
                })
            }
        } catch (err) {
            res.send({
                status: 500,
                message: "something Went Wrong"
            })
        }
    },
    VerifyToken: (req, res, next) => {
        //get Auth Header value
        const bearerHeader = req.headers["authorization"];
        if (typeof bearerHeader != "undefined") {
            const bearer = bearerHeader;
            const beareToken = bearer;
            req.token = beareToken;
            next();
        } else {
            res.status(403).send("forbidden");
        }
    },
    DecodeToken: (params) => {
        var token = params.headers["authorization"] || params.query["token"];
        var decoded = {};

        if (token) {
            decoded = jwt.verify(token, secretKey);
        }

        return decoded;
    }
}
