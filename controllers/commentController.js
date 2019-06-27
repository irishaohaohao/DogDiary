'use strict';
const Comment = require( '../models/Comment' );

exports.saveComment = ( req, res ) => {
  //console.log("in save!")
  //console.dir(req.body)
  let newComment = new Comment(
   {
    comment: req.body.comment
   }
  )

  //console.log("comment = ")
  //console.dir(newComment)

  newComment.save()
    .then( () => {
      res.redirect( '/showComments' );
    } )
    .catch( error => {
      res.send( error );
    } );
};



// this displays all of the skills
exports.getAllComments = ( req, res ) => {
  //console.log('in getAll...')
  Comment.find()
    .exec()
    .then( ( comments ) => {
      //console.dir(comments)
      res.render( 'comments', {
        comments:comments, title:"Comments"
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      //console.log( 'skill promise complete' );
    } );
};

// this displays all of the skills
exports.getOneComment = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  const id = req.params.id
  console.log('the id is '+id)
  Comment.findOne({_id:id})
    .exec()
    .then( ( comment ) => {
      res.render( 'comment', {
        comment:comment, title:"Comment"
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      //console.log( 'skill promise complete' );
    } );
};
