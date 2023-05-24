import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import 'firebase/compat/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCQzBNZNaftPc3zFtd9cOmWTlRt2kjcpa4",
  authDomain: "narua-2fc56.firebaseapp.com",
  projectId: "narua-2fc56",
  storageBucket: "narua-2fc56.appspot.com",
  messagingSenderId: "272878779590",
  appId: "1:272878779590:web:cbf9db7f8df6f8ea316bc7"
}
firebase.initializeApp(firebaseConfig);

export default firebase