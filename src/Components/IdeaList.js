//Imports
import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; 

const IdeaList = () => {
  const [ideas, setIdeas] = useState([]);  
  const [loading, setLoading] = useState(true); 

  // Fetch ideas from Firestore
  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        // Get all documents from the ideas collection that is created.
        const snapshot = await db.collection('ideas').get();
        const ideasList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setIdeas(ideasList); //The ideas is stored in state.
        setLoading(false); // The loading is set to false after the data is fetched.
      } catch (error) {
        console.error('Error fetching ideas:', error);
        setLoading(false);
      }
    };

    fetchIdeas();
  }, []); 

  if (loading) {
    return <div>Please wait</div>; // This message is displayed when the data is being fetched.
  }

  return (
    <div>
      <h1>Ideas</h1>
      <ul>
        {ideas.map(idea => (
          <li key={idea.id}>
            <h2>{idea.title}</h2>
            <p>{idea.description}</p>
            <p>Votes: {idea.votes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IdeaList;

