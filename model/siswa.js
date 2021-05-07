const mongoose = require('mongoose')
const Schema = mongoose.Schema

const siswaSchema = new Schema({
    nama: {
        type : String,
    },
    nisn: {
        type : Number,
    },
    jurusan: {
        type : String,
    },
    kelas: {
        type : String,
    },
    agama: {
        type : String,
    },
    alamat: {
        type : String,
    },
    tempatLahir: {
        type : String,
    },
    tanggalLahir: {
        type : Date,
    },
    jenisKelamin: {
        type : String,
    },
    email: {
    type : String,
    },
    telepon:{
    type : String
    }
})

module.exports = mongoose.model('siswa', siswaSchema)