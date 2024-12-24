import { db, collection, addDoc } from './firebase';  
// Function to add a new idea to Firestore
const addIdea = async (ideaData) => {
  try {
    // Adding a new document to the ideas collection in Firestore
    const docRef = await addDoc(collection(db, "ideas"), ideaData);
    console.log("Document written with ID: ", docRef.id);  
  } catch (error) {
    console.error("Error adding document: ", error);  
  }
};

export { addIdea };  // Exporting the function 
