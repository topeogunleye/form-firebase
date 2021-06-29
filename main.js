// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: 'AIzaSyAIuYQwzy22fM75v7_B3jjwS-uRLMHZd9M',
  authDomain: 'oodua-265c0.firebaseapp.com',
  projectId: 'oodua-265c0',
};

firebase.initializeApp(config);

// Initialize firebase database
var db = firebase.firestore();

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var first_name = getInputVal('first_name');
  var last_name = getInputVal('last_name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var profession = getInputVal('profession');
  var state = getInputVal('state');
  var skills = getInputVal('skills');
  var gender = getInputVal('gender');

  // Save message
  saveMessage(
    first_name,
    last_name,
    email,
    phone,
    profession,
    state,
    skills,
    gender
  );

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(
  first_name,
  last_name,
  email,
  phone,
  profession,
  state,
  skills,
  gender
) {
  // Add new document to collection messages
  db.collection('messages')
  .add({
    first_name: first_name,
    last_name: last_name,
    email: email,
    phone: phone,
    profession: profession,
    state: state,
    skills: skills,
    gender: gender
  })
  .then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch((error) => {
    console.error('Error adding document: ', error);
  });
}


