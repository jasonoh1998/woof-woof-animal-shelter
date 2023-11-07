import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBaiOeJLaZAXWs2vKUogjTdpKtuuaZdnKg",
  authDomain: "jason-test-eb8bf.firebaseapp.com",
  projectId: "jason-test-eb8bf",
  storageBucket: "jason-test-eb8bf.appspot.com",
  messagingSenderId: "57837175444",
  appId: "1:57837175444:web:0d625a8c862ec2d017ea81"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };