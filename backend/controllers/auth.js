const User = require("../models/User");

module.exports = {
    addUser: async (req, res) => {
        try {
            const user = await User.create(req.body.user);
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.params.email });
            res.json(user);
        } catch (err) {
            console.log(err);
        }
    },
    addToFavorite: async (req, res) => {
        console.log(req.body);
        try {
            const user = await User.updateOne(
                {
                    email: req.params.email,
                    "collections.collName": "All saved items",
                },
                {
                    $push: {
                        "collections.$.collRecipes": {
                            recipeName: req.body.recipeName,
                            recipeData: req.body.recipeData,
                        },
                    },
                }
            );

            res.json(user);
        } catch (err) {
            console.log(err);
        }
    },
    deleteFavorite: async (req, res) => {
        try {
            const user = await User.updateOne(
                {
                    email: req.params.email,
                    "collections.collName": "All saved items",
                },
                // {
                //     $pull: {
                //         "collections.$.collRecipes": {
                //             { _id: { $in: ids } }
                //         },
                //     },
                // }
                {
                    $pull: {
                        "collections.$.collRecipes": { _id: { $in: ids } },
                    },
                }
            );

            res.json(user);
        } catch (error) {
            console.log(err);
        }
    },
};
