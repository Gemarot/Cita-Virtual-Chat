const firebaseConfig = {
  // Configuración de Firebase aquí
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

let messagesDiv = document.getElementById('messages');
let messageInput = document.getElementById('message-input');

function sendMessage() {
  let message = messageInput.value;
  if (message) {
    db.collection('messages').add({
      text: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    messageInput.value = '';
  }
}

db.collection('messages').orderBy('timestamp').onSnapshot((snapshot) => {
  messagesDiv.innerHTML = '';
  snapshot.forEach((doc) => {
    let messageElement = document.createElement('p');
    messageElement.textContent = doc.data().text;
    messagesDiv.appendChild(messageElement);
  });
});
