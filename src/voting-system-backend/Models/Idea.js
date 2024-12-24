// src/components/AddIdea.js
import React, { useState } from 'react';
import { db } from '../firebase';  
import { collection, addDoc } from 'firebase/firestore';  

const AddIdea = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();  

    if (!title || !description) {
      alert("Please provide both a title and a description.");
      return;
    }

    try {
      // Add the new idea to Firestore
      const docRef = await addDoc(collection(db, "ideas"), {
        title: title,
        description: description,
        votes: 0,  
        createdAt: new Date()  
      });
      console.log("Document written with ID: ", docRef.id);
      
      // Clear the form fields after submission
      setTitle('');
      setDescription('');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <h2>Add a New Idea</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Idea</button>
      </form>
    </div>
  );
};

export default AddIdea;
