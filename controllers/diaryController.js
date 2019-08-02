'use strict';
const Diary = require( '../models/Diary' );

exports.savediaries = ( req, res ) => {
  //console.log("in saveSkill!")
  //console.dir(req)
  let newDiary = new Diary(
   {
    PicURL: req.body.PicURL,
    name: req.body.name,
    highlight: req.body.highlight,
    details: req.body.details,
    userName: req.user.userName,
    userID: req.user._id,
    createdAt: new Date()
   })

  //console.log("skill = "+newSkill)

  newDiary.save()
    .then( () => {
      res.redirect( '/diaryAdded' );
    } )
    .catch( error => {
      res.send( error );
    } );
};

exports.getAlldiaries = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  Diary.find({}).sort({createdAt: -1})
    .exec()
    .then( ( diaries ) => {
      res.render( 'diary', {
        diaries:diaries, title:"diaries"
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

exports.deleteDiary = (req, res) => {
  console.log("in deleteForumPost")
  let deleteId = req.body.delete
  if (typeof(deleteId)=='string') {
      // you are deleting just one thing ...
      Diary.deleteOne({_id:deleteId})
           .exec()
           .then(()=>{res.redirect('/diary')})
           .catch((error)=>{res.send(error)})
  } else if (typeof(deleteId)=='object'){
      Diary.deleteMany({_id:{$in:deleteId}})
           .exec()
           .then(()=>{res.redirect('/diary')})
           .catch((error)=>{res.send(error)})
  } else if (typeof(deleteId)=='undefined'){
      //console.log("This is if they didn't select a skill")
      res.redirect('/diary')
  } else {
    //console.log("This shouldn't happen!")
    res.send(`unknown deleteId: ${deleteId} Contact the Developer!!!`)
  }

};
