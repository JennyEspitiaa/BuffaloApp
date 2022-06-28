import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAtN19dBTEwalZn6WBDmWH-_RK2rinnGf8",
  authDomain: "buffaloapp-429e1.firebaseapp.com",
  projectId: "buffaloapp-429e1",
  storageBucket: "buffaloapp-429e1.appspot.com",
  messagingSenderId: "959462475255",
  appId: "1:959462475255:web:356e4c233f2d78ed229af2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider();

export default app
