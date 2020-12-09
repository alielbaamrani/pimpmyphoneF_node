const express = require("express");
const router = express.Router();
const db = require("../database/db");

router.post("/addmodel", (req, res) => {
    db.model.create(req.body)
        .then(itemmodel => {
            res.status(200).json({
                nom: itemmodel.nom,
                couleur: itemmodel.couleur,
                capacite: itemmodel.capacite,
                panne: itemmodel.panne,
            })
        })
        .catch(err => {
            res.json(err);
        })
});




module.exports = router;