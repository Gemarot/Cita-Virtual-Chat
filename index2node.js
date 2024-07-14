const admin = require("firebase-admin");
const serviceAccount = require("./path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com"
});

// Ejemplo de uso: enviar un mensaje a Firestore
const db = admin.firestore();

const docRef = db.collection('messages').doc('sampleMessage');

docRef.set({
  text: 'Este es un mensaje de ejemplo',
  timestamp: admin.firestore.FieldValue.serverTimestamp()
}).then(() => {
  console.log('Documento escrito con éxito.');
}).catch((error) => {
  console.error('Error al escribir el documento: ', error);
});
