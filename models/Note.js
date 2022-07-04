const { Model, DataTypes } = require('sequelize');

const { sequelize } = require('../utils/db');

class Note extends Model { }

Note.init({
  nomor: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  tglUsul: {
    type: DataTypes.DATE,
  },
  pengusul: {
    type: DataTypes.STRING,
  },
  fraksi: {
    type: DataTypes.STRING,
  },
  urusan: {
    type: DataTypes.STRING,
  },
  permasalahan: {
    type: DataTypes.STRING,
  },
  alamat: {
    type: DataTypes.STRING,
  },
  kecamatan: {
    type: DataTypes.ENUM(
      'Balikpapan Kota',
      'Balikpapan Selatan',
      'Balikpapan Barat',
      'Balikpapan Timur',
      'Balikpapan Tengah',
      'Balikpapan Utara'
    ),
  },
  kelurahan: {
    type: DataTypes.ENUM(
      'Manggar',
      'Manggar Baru',
      'Lamaru',
      'Teritip',
      'Damai Baru',
      'Damai Bahagia',
      'Sepinggan Baru',
      'Sungai Nangka',
      'Sepinggan Raya',
      'Gunung Bahagia',
      'Sepinggan',
      'Gunung Sari Ilir',
      'Gunung Sari Ulu',
      'Mekar Sari',
      'Karang Rejo',
      'Sumber Rejo',
      'Karang Jati',
      'Gunung Samarinda',
      'Muara Rapak',
      'Batu Ampar',
      'Karang Joang',
      'Gunung Samarinda Baru',
      'Graha Indah',
      'Baru Ilir',
      'Margo Mulyo',
      'Marga Sari',
      'Baru Tengah',
      'Baru Ulu',
      'Kariangau',
      'Prapatan',
      'Telaga Sari',
      'Klandasan Ulu',
      'Klandasan Ilir',
      'Damai',
    ),
  },
  nilaiKoefisien: {
    type: DataTypes.INTEGER,
  },
  satuanKoefisien: {
    type: DataTypes.STRING,
  },
  opdTujuanAwal: {
    type: DataTypes.STRING,
  },
  opdTujuanAkhir: {
    type: DataTypes.STRING,
  },
  rekomendasiSetwan: {
    type: DataTypes.STRING,
  },
  rekomendasiBappeda: {
    type: DataTypes.STRING,
  },
  kategoriUsulan: {
    type: DataTypes.STRING,
  },
  rekomendasiSKPD: {
    type: DataTypes.STRING,
  },
  rekomendasiBappeda: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  }
}, {
  sequelize,
  underscored: true,
  timestamps: true,
  modelName: 'Note',
});

module.exports = Note;
