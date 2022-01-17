// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyCSxFbo4fjtATzrkiJOZjdDJg_r-GuPuw8',
  authDomain: 'netflix-clone-a9843.firebaseapp.com',
  projectId: 'netflix-clone-a9843',
  storageBucket: 'netflix-clone-a9843.appspot.com',
  messagingSenderId: '280093582437',
  appId: '1:280093582437:web:b0ce2e24ec1094e225528c',
  measurementId: 'G-960GB06WWY',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);
export default storage;