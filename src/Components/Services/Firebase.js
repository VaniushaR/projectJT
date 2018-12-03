import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAiDg2qd5PtpQ96fPGfkztc2wIy3GjguU8',
  authDomain: 'squadproyectsapp.firebaseapp.com',
  databaseURL: 'https://squadproyectsapp.firebaseio.com',
  projectId: 'squadproyectsapp',
  storageBucket: 'squadproyectsapp.appspot.com',
  messagingSenderId: '1076760498108'
};
firebase.initializeApp(config);

//Firestor initializer
export const db = firebase.firestore();

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export default firebase;

//Login with Google
export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.error(`Error ${error.code}: ${error.message}`));
};

//Login with Facebook
export const LoginFB = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.error(`Error ${error.code}: ${error.message}`));
};

//LogOut function
export const handleLogout = () => {
  firebase
    .auth()
    .signOut()
    .then(result => console.log(`${result.user.email} ha terminado su sesión.`))
    .catch(error =>
      console.log(`Ha ocurrido un error ${error.code}: ${error.message}`)
    );
};
