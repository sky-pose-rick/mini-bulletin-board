const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const { Schema } = mongoose;
const MessageSchema = new Schema({
  text: { type: String, required: true },
  user: { type: String, required: true },
  added: { type: Date },
});

MessageSchema.virtual('added_formatted').get(function () {
  return DateTime.fromJSDate(this.added).toLocaleString(DateTime.DATETIME_MED);
});

module.exports = mongoose.model('Message', MessageSchema);
