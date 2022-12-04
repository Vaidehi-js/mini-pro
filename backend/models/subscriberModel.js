const { Schema, model, Types } = require("../connection");
const schema = new Schema({
  username: String,
  email: String,
//   ownerid: { type: Types.ObjectId, ref: "users" },
});

module.exports = model("subscribers", schema);
