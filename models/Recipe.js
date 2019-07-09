'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var recipeSchema = Schema( {
  name: String,
  ingredient: String,
  description: String,
  username: String,
  createdAt: Date
} );

module.exports = mongoose.model( 'recipe', recipeSchema );
