import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, onDisconnect } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDu4Wdc1OpFICLGsHzmtzWIvBWnLYyyGNc",
  authDomain: "weberkan-aa7fb.firebaseapp.com",
  databaseURL: "https://weberkan-aa7fb-default-rtdb.firebaseio.com",
  projectId: "weberkan-aa7fb",
  storageBucket: "weberkan-aa7fb.appspot.com",
  messagingSenderId: "456380693947",
  appId: "1:456380693947:web:df4cdeed6a5244bba8589e"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, onValue, set, onDisconnect };
