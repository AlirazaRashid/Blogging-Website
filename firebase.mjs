

  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyAZBmnj49Fg_FQyyDh3bOS7ftIu3L3bjGA",
    authDomain: "new-project-6b7e8.firebaseapp.com",
    projectId: "new-project-6b7e8",
    storageBucket: "new-project-6b7e8.appspot.com",
    messagingSenderId: "99060357900",
    appId: "1:99060357900:web:7bc092ece6874559f20729"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const auth = getAuth(app);
//   console.log("auth=>" , auth);



onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("user is login");
    
    // ...
  } else {
    // User is signed out
    // ...
    console.log("user not is login");
    
  }
});
  