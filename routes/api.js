const router = require ('express').Router();

const apiProfsRou = require ('./api/profs')

router.use('/profs', apiProfsRou);

module.exports = router;