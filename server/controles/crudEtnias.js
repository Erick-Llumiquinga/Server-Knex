;
let config = require('../knexfile')
let env = 'development'
let db = require('knex')(config[env])

let postEtnias = (req, res) =>{
    let tabla = req.body.tabla
    let registro = req.body.register
    db(tabla).returning('id').insert(registro)
    .then(response =>{
        return res.status(200).json({
            ok: true,
            data: response,
            mensaje: `Datos guardados`
        })
    })
    .catch(error =>{
        return res.status(500).json({
            ok: false,
            data: null,
            mensaje: `error: ${error}`
        })
    })
}

let getEtnias = (req, res) =>{
    let tabla = req.query.tabla
    let campo = req.query.campo
    db.select(campo).from(tabla)
    .then(response =>{
        return res.status(200).json({
            ok: true,
            data: response,
            mensaje: `total de datos`
        })
    })
    .catch(error =>{
        return res.status(500).json({
            ok: false,
            data: null,
            mensaje: `error: ${error}`
        })
    })
}

let deleteEtnias = (req, res) =>{
    let tabla = req.body.tabla;
    let id = req.body.id
    db(tabla).where('id', id).delete()
    .then(response => {
        return res.status(200).json({
            ok: true,
            data: response,
            mensaje: `Datos eliminados`
        })
    })
    .catch(error=>{
        return res.status(200).json({
            ok: false,
            data: error,
            mensaje: `error al eliminar`
        })
    })
}

let updateEtnias = (req,res) =>{
    let tabla = req.body.tabla;
    let datos = req.body.datos;
    let id = req.body.id;
    datos.forEach(element => {
        db(tabla).where('id', id).update(element)
    })
    .then(response =>{
        return res.status(200).json({
            ok: true,
            data: response,
            mensaje: "veamos que pasa"
        })
    })
}

module.exports = {
    postEtnias,
    getEtnias,
    deleteEtnias,
    updateEtnias
}