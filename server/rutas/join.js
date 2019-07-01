;
const express = require('express')
let api = express.Router(),
  pruebaControl = require('../controles/prueba')
  loginControl = require('../controles/crudLogin')
  etniasControl = require('../controles/crudEtnias')
api.get('/prueba', pruebaControl.prueba)
api.get('/prueba1', pruebaControl.prueba1)
api.post('/prueba1', pruebaControl.prueba1)


api.post('/login', loginControl.postUser)
api.get('/getUser', loginControl.getUser)
api.put('/editUser', loginControl.putUser)
api.delete('/deleteUser', loginControl.deleteUser)

api.post('/ingresarEtnia', etniasControl.postEtnias)
api.get('/leerEtnia', etniasControl.getEtnias)
api.delete('/delete', etniasControl.deleteEtnias)
api.put('/update', etniasControl.updateEtnias)

module.exports = api