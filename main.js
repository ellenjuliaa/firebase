// Inicializa o Firebase (Adicionar a configuração do Firebase do seu aplicativo da web)
var config = {
  apiKey: "AIzaSyA_12wo6w5i3Mmyo0ZYmbIEh5Nv7Uul_uI",
  authDomain: "fir-teste-e3ded.firebaseapp.com",
  databaseURL: "https://fir-teste-e3ded-default-rtdb.firebaseio.com",
  projectId: "fir-teste-e3ded",
  storageBucket: "fir-teste-e3ded.appspot.com",
  messagingSenderId: "1083232919944",
  appId: "1:1083232919944:web:feb73dab38169dfea61a3d"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');

// envio do formulário
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  // valores
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // salva a mensagem
  saveMessage(name, company, email, phone, message);

  // mostra o alerta 
  document.querySelector('.alert').style.display = 'block';

  // esconde o alerta após 3 segundos
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // limpa o formulário
  document.getElementById('contactForm').reset();
}

// obtem valores do formulário
function getInputVal(id){
  return document.getElementById(id).value;
}

// Salva a mensagem no firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
