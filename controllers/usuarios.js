const { request, response } = require('express');

const usuariosGet = async (req = request, res = response) => {

    res.json({
        ok: true,
        msg: 'usuariosGet',
    });
};

const usuariosPut = async (req, res) => {

    res.json({
        ok: true,
        msg: 'usuariosPut',
    });
};

const usuariosPost = async (req, res) => {

    res.json({
        ok: true,
        msg: 'usuariosPost',
    });
};

const usuariosDelete = async (req, res) => {

    res.json({
        ok: true,
        msg: 'usuariosDelete',
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
};