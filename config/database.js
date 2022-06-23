const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://gab1608@gabonito.th4xf.mongodb.net/test')
}

module.exports = conn