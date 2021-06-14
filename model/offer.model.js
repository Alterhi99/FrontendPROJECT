/**
 * @Author: Hichem Aitouakli <Hayden>
 * @Date:   2021-06-02T23:28:52+01:00
 * @Email:  alterhichem99@gmail.com
 * @Project: Jobhunt
 * @Last modified by:   Hayden
 * @Last modified time: 2021-06-13T21:51:54+01:00
 */



const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema  = mongoose.Schema;


OffreEmploiShema= new mongoose.Schema ({

  NumOffre: {
    type : Number,
    unique: true,
    index: true
  },
  IntituleOffre : {
    type: String,
    required: true
  },
  Datedebut : {
    type: Date,
    required: true
},
  DateFin:{
  type:Date,
  required: true
},
  Lieu : {
    type: String,
  required: true
},
  Description:{
    type:String
  },
   role: {
    type: String,
    default: 'Recruiter',
    enum: [ "Recruiter", "admin"]
   }

}) ;
OffreEmploiShema.plugin(AutoIncrement, {inc_field: 'NumOffre'});
//creer un model
const OffreEmploiModel= mongoose.model('OffreEmploi',OffreEmploiShema);

module.exports =  OffreEmploiModel;
