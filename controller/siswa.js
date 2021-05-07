const siswaModel = require('../model/siswa')
const objectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
    new Promise((resolve, reject) => {
        siswaModel.create(data)
            .then(() => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Input Kegiatan'
                })
            }).catch(() => reject({
                status: false,
                pesan: 'Gagal Input Kegiatan'
            }))
    })

    exports.getAll = () =>
    new Promise((resolve, reject) => {
        siswaModel.find()
            .then(result => {
                resolve({
                    status: true,
                    pesan: 'Berhasil Menampilkan Data',
                    result: result
                })
            }).catch(() => reject({
                status: true,
                pesan: 'Gagal Mendapatkan Data',
                result: []
            }))
    })

    exports.getById = (id) =>
    new Promise((resolve, reject) => {
        siswaModel.findOne({
            _id: objectId(id)
        }).then(result => resolve({
            status: true,
            pesan: 'Berhasil Mendapatkan Data',
            result: result
        })).catch(() => reject({
            status: false,
            pesan: 'Gagal Mendapatkan Data',
            result: null
        }))
    })

exports.update = (id, data) =>
        new Promise((resolve, reject) => {
            siswaModel.updateOne({
                _id: objectId(id)
            }, data).then(() => resolve({
                status: true,
                pesan: 'Berhasil Update Data'
            })).catch(() => reject({
                status: false,
                pesan: 'Gagal Update'
            }))
        })

exports.delete = (id) =>
        new Promise((resolve, reject) => {
            siswaModel.deleteOne({
                _id: objectId(id)
            }).then(() => resolve({
                status: true,
                pesan: 'Berhasil Delet Data'
            })).catch(() => reject({
                status: false,
                pesan: 'Gagal Update Data'
            }))
        })