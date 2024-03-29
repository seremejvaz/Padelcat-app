const { Schema } = require("mongoose");

const Player = new Schema({
  admin: {
    type: Boolean,
    default: false
  },

  name: {
    type: String,
    required: true
  },

  surname: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: email => {
        return /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/.test(
          email
        );
      },
      message: props => `${props.value} is not a valid email`
    }
  },

  password: {
    type: String,
    required: true
  },

  matchesPlayed: {
    type: Number
  },

  preferedPosition: {
    type: String,
    default: ["right", "left", "both"]
  },

  playerImage: {
    type: String
  },

  availability: {
    type: Array
  },

  score: {
    type: Number
  },

  link: {
    type: String
  }
});

module.exports = Player;
