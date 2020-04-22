
const colors = require('colors/safe')

const moment = require('moment')

const name = 'Elvira'

const hour = moment(new Date()).format('hh:mm:ss a')

console.log(colors.rainbow(`Hola ${name} son las ${hour}`))
