// Importing Firebase 
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// This is the Firebases configuration 
const firebaseConfig = {
  apiKey: "AIzaSyCULn4lWnVg6X3oZZ3oOzjwWQBVxKOWWOI",
  authDomain: "greenfuture-b1eee.firebaseapp.com",
  projectId: "greenfuture-b1eee",
  storageBucket: "greenfuture-b1eee.appspot.com",
  messagingSenderId: "131278361120",
  appId: "1:131278361120:web:7c65f3f66e40f50a506245",
  measurementId: "G-SC0F9MH9GX"
};

// Initialising the Firebase App
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app); 

// Function to add an idea to Firestore
export const addIdea = async (Title, Description, userId) => {
  try {
    
    const ideasRef = collection(db, "Ideas");

    // Adding a new idea document to Firestore
    const docRef = await addDoc(ideasRef, {
      Title,
      Description,
      Votes: 0,
      userId: userId, 
    });

    
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    
    console.error("Error adding document:", error.message);  // Error message is displayed
    console.error("Error details:", error);  
  }
};

export { auth, db }; 

