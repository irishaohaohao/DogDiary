'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var commentSchema = Schema( {
  comment: String
} );

module.exports = mongoose.model( 'Comment', commentSchema );
