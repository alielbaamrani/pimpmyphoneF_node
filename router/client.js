const express = require("express");
const router = express.Router();
const db = require("../database/db");

router.post("/register", (req, res) => {
    db.client.create(req.body)
        .then(itemclient => {
            res.status(200).json({
                nom: itemclient.nom,
                prenom: itemclient.prenom,
                email: itemclient.email,
                tel: itemclient.tel,
                adresse: itemclient.adresse,
                lieux: itemclient.lieux,
            })
        })
        .catch(err => {
            res.json(err);
        })
});

// router.put("/envoyer", (req, res) => {
//     db.model.findOne({
//         where: {
//             id: req.params.id
//         }
//     })

//     model.envoyer(req.body)
//         .then(modelitem => {
//             console.log(modelitem);
//             db.model.findOne({
//                     where: {
//                         id: modelitem.id
//                     }
//                 })
//                 .then(model => {
//                     let token = jwt.sign(model.dataValues,
//                         process.env.SECRET_KEY, {
//                             expiresIn: 1800, //s
//                         });
//                     res.status(200).json({
//                         token: token
//                     })
//                 })
//                 .catch(err => {
//                     res.status(402).send(err + 'bad request')
//                 })
//         })
//         .catch(err => {
//             res.status(402).send("impossible de metter à jour le model" + err);
//         })
// });


module.exports = router;