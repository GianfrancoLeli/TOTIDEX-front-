const router = require ('express').Router();

const { Prof } = require('../../db'); //Modelo de BD usado na exportação

        /* Nosso CRUD */

router.get('/', async (req, res) => {
    const profs = await Prof.findAll();
    res.json (profs);
});

router.get('/:profId', async (req, res) => {
    const prof = await Prof.findOne({
        where: { id: req.params.profId }
    });
    res.json(prof)
});

router.post('/', async (req, res) => {
    const prof = await Prof.create(req.body)
    res.json(prof);
});

router.put('/:profId', async (req, res) => {
    await Prof.update(req.body, {
        where: { id: req.params.profId }
    });
    res.json({success: 'Dado Atualizado com Sucesso!' })
});

router.delete('/:profId', async (req, res) => {
    await Prof.destroy({
        where: { id: req.params.profId }
    });
    res.json({success: 'Dado apagados com Sucesso!' })
});

module.exports = router; 