
const express = require('express')
const router = express.Router();



const offreEmploiCont= require('../controller/offers.controller');

router.post('/AdOffer',offreEmploiCont.Addoffer);

router.get('/getOffers', offreEmploiCont.getOffer);
//router.get('/offer/:offerId', offreEmploiCont.allowIfLoggedin, offreEmploiCont.getOffer);

router.get('/getOneOffer/:offerID', offreEmploiCont.getOffers);
//router.get('/getOneOffer', offreEmploiCont.allowIfLoggedin, offreEmploiCont.grantAccess('readAny', 'profile'), offreEmploiCont.getOffers);

router.put('/updateOffer/:offerID', offreEmploiCont.updateOffer);
//router.put('/updateOffer', offreEmploiCont.allowIfLoggedin, offreEmploiCont.grantAccess('updateAny', 'profile'), offreEmploiCont.updateOffer);

router.delete('/deleteOffer/:offerID', offreEmploiCont.deleteOffer);
//router.delete('/deleteOffer',offreEmploiCont.allowIfLoggedin, offreEmploiCont.grantAccess('deleteAny', 'profile'),offreEmploiCont.deleteOffer);


module.exports = router;
