const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = {
    registerUser: async (req, res) => {
        if (req.body.password.length < 8) {
            res.status(401).json(
                "Password length needs to be at least 8 characters long!"
            );
            return;
        }

        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString(),
        });

        try {
            const checkUserName = await User.findOne({
                username: req.body.username,
            });
            if (checkUserName) {
                res.status(401).json(
                    `Username is not available! Try with different one!`
                );
                return;
            }

            const newUser = await user.save();
            res.status(200).json(newUser);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res
                    .status(401)
                    .json(
                        `The email you entered isn’t connected to an account! Create a new account.`
                    );
            }

            const bytes = CryptoJS.AES.decrypt(
                user.password,
                process.env.SECRET_KEY
            );
            const originaPassword = bytes.toString(CryptoJS.enc.Utf8);

            if (originaPassword !== req.body.password) {
                return res.status(401).json("Wrong password or username!");
            }

            const accessToken = jwt.sign(
                { id: user._id },
                process.env.SECRET_KEY,
                { expiresIn: "5d" }
            );

            const { password, ...info } = user._doc;

            res.status(200).json({ ...info, accessToken });
        } catch (error) {
            res.status(500).json(error);
        }
    },
};
