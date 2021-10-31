import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
    apiKey: "AIzaSyDnfR5z-iSNfKfFDN4-2PEevLLzYZs3WVQ",
    authDomain: "testpj-2abb0.firebaseapp.com",
    projectId: "testpj-2abb0",
    storageBucket: "testpj-2abb0.appspot.com",
    messagingSenderId: "370362564148",
    appId: "1:370362564148:web:47622b44fb7b535fc9d461",
    measurementId: "G-QBTT8Y00ET"
    }
  )
}
  
export default firebase