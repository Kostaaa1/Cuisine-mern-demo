const mongoose = require("mongoose");

const CollectionRecipeSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
    recipeName: { type: String },
    recipeData: {},
});

const CollectionSchema = new mongoose.Schema({
    collName: String,
    collDesc: String,
    private: Boolean,
    collRecipes: [CollectionRecipeSchema],
});

const UserSchema = new mongoose.Schema(
    {
        nickname: { type: String, require: true },
        email: { type: String, unique: true, require: true },
        picture: { type: String },
        firstName: { type: String },
        lastName: { type: String },
        birthDate: { type: String },
        zipCode: { type: String },
        collections: [CollectionSchema],
        personalRecipes: { type: Array },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
