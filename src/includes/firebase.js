import Firebase from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAGABF4PQy9OaTo0C0ygVEKvp15AS5Wu_M",
  authDomain: "music-player-app-db.firebaseapp.com",
  projectId: "music-player-app-db",
  storageBucket: "music-player-app-db.appspot.com",
  appId: "1:851894563128:web:9bdbbc3926ae2080afd1cd"
};

export default Firebase.initializeApp(firebaseConfig);