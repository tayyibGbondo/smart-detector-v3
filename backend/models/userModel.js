const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//Schema to store in the database
const userSchema = mongoose.Schema(
  {
    //properties of the schema
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      trim: true,
      match: [
        //regex for email validation
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: [6, "There must be up to 6 characters"],
      // maxLength: [23, "Password must not be more than 23 characters"],
    },
    photo: {
      type: String,
      // required: [true, "Please Choose a photo"],
      default: "https://i.ibb.co/4pDNDK1/avatar.png",
    },
    phone: {
      type: String,
      default: "+232",
    },
    bio: {
      type: String,
      maxLength: [250, "Bio must not be more than 250 characters"],
    },
    tokens: [{ type: Object }],
  },
  {
    timestamps: true,
  }
);

//export schema
const user = mongoose.model("user", userSchema);
module.exports = user;
