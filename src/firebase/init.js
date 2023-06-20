import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvBtEfqLE4tOy7i5xI7eCv0lBl9oMpxsk",
  authDomain: "graduate-work-16857.firebaseapp.com",
  projectId: "graduate-work-16857",
  storageBucket: "graduate-work-16857.appspot.com",
  messagingSenderId: "872117226764",
  appId: "1:872117226764:web:fa9fc6dc893b93d31fcd29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
export default db

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
