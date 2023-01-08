const User = require("../models/User");

module.exports = {
    addUser: async (req, res) => {
        console.log(req.body);
        try {
            const newUser = new User(req.body.user);
            await newUser.save();
            // const user = await User.create(newUser);

            res.json(newUser);
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
            const user = await User.findOneAndUpdate(
                {
                    email: req.params.email,
                    "collections.collName": "All saved items",
                },
                {
                    $addToSet: {
                        "collections.$.collRecipes": {
                            recipeTitle: req.body.recipeTitle,
                            recipe: req.body.recipe,
                        },
                    },
                },
                { unique: true, new: true, runValidators: true }
            );

            res.json(user);
        } catch (err) {
            console.log(err);
        }
    },
    deleteFavorite: async (req, res) => {
        console.log(req.body);
        try {
            const user = await User.findOneAndUpdate(
                {
                    email: req.params.email,
                    "collections.collName": "All saved items",
                },
                {
                    $pull: {
                        "collections.$.collRecipes": {
                            // _id: { $in: req.body.ids },
                            recipeTitle: { $in: req.body.titles },
                        },
                    },
                }
            );

            res.json(user);
        } catch (error) {
            console.log(err);
        }
    },
};
