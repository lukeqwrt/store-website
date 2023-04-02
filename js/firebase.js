var config = {
    apiKey: "AIzaSyAyIv-tqpT_KeH9urfNNtTE7GuMuoDWieg",
    authDomain: "forma-600c1.firebaseapp.com",
    projectId: "forma-600c1",
    storageBucket: "forma-600c1.appspot.com",
    messagingSenderId: "314076951054",
    appId: "1:314076951054:web:b48c1db500b7665897025f",
    measurementId: "G-NRRVPLZQ9W"
  };

  firebase.initializeApp(config);
  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true });