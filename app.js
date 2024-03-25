const mongoose = require('mongoose');

const uri_bd = 'mongodb://localhost:27017/jose';

mongoose.connect(uri_bd)
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });

// Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  apepat: {
    type: String
  },
  apemat: {
    type: String
  },
  numtel: {
    type: Number
  },
  fechdenzc: {
    type: Date
}
});

// Model
const Alum = new mongoose.model('regAlumn', userSchema);

Alum.create(

{
 
     name:'jose',
     apepat:'delarosa',
     apemat:'ibarra',
     numtel:'4497278222',
     fechdenzc: new Date('2002, 3, 23')

}
)
// Exportar el modelo para su uso en otros archivos