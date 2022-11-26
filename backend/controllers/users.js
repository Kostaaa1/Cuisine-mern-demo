const User = require("../models/User");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

// CRUD OPERATIONS
module.exports = {
    updateUser: async (req, res) => {
        if (req.user.id === req.params.id) {
            if (req.body.password) {
                req.body.password = CryptoJS.AES.encrypt(
                    req.body.password,
                    process.env.SECRET_KEY
                ).toString();
            }

            try {
                const updatedUser = await User.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );

                res.status(200).json(updatedUser);
            } catch (error) {
                res.status(500).json(error);
            }
        } else {
            res.status(403).json(
                "Wrong Id in request or user id from token not found !"
            );
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json(`User has been deleted!`);
        } catch (error) {
            res.status(500).json(error);
        }
    },
};
