'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var diarySchema = Schema( {
  name: String,
  highlight: String,
  details: String,
  userName: String,
  createdAt: Date,
  userID: ObjectId,
  PicURL: String
} );

module.exports = mongoose.model( 'diary', diarySchema );
