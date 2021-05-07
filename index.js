const express = require('express')
const app = express()

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ELearningSMK', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Berhasil Konek Ke Database'))
.catch((err) => console.log('Gagal Konek ke database'))

app.use(express.json({
    extended: true,
    limit: '20mb'
}))

app.use(express.urlencoded({
    extended: true,
    limit: '20mb'
}))

app.use('/siswa', require('./routes/siswa'))

app.listen(3000, () => {
    console.log('server started')
})