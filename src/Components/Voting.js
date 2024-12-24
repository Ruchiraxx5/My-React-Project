import React, { useState, useEffect } from "react";
import { db, addIdea } from "../firebase";
import { collection, getDocs, updateDoc, doc, increment } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import Firebase Auth
import '../App.css';

const App = () => {
  const [Ideas, setIdeas] = useState([]);
  const [Title, setNewIdea] = useState("");
  const [Description, setNewDescription] = useState("");
  const [userId, setUserId] = useState(""); 

  // Get the current user's ID that is already authenticated.
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setUserId(user.uid); // Storing the user ID if they are logged in.
    }
  }, []);

  // Fetch ideas from Firestore
  const fetchIdeas = async () => {
    const querySnapshot = await getDocs(collection(db, "Ideas"));
    const ideasList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(ideasList);
    setIdeas(ideasList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Title.trim() && Description.trim()) {
      try {
        // Adding user ID when adding the idea to Firestore.
        await addIdea(Title, Description, userId);
        setNewIdea("");
        setNewDescription("");
        fetchIdeas(); 
      } catch (error) {
        console.error("Error submitting idea: ", error);
      }
    }
  };

  // This disables voting for their own idea if they are logged in.
  const handleVote = async (ideaId) => {
    const ideaRef = doc(db, "Ideas", ideaId);
    await updateDoc(ideaRef, {
      votes: increment(1),
    });
    fetchIdeas(); 
  };

  useEffect(() => {
    fetchIdeas();
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      <h1>GreenFuture Idea Submission Form</h1>
      <div>
        <p>Welcome! Please take your time to add an idea below using our idea submission form. Once you have completed, please press submit.</p>
        <p>Below your idea will be displayed. You can vote for any idea except for your own. Your opinion matters to us.</p>
      </div>
{/* Idea submission form */}
<h2>Idea Submission Form</h2>
    <form className="My-form" onSubmit={handleSubmit}>
    <div>
    <label>
    Title:
    <input
    type="text"
    value={Title}
    onChange={(e) => setNewIdea(e.target.value)} // The value will be updated to what the user inputs.
    required
    />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              value={Description}
              onChange={(e) => setNewDescription(e.target.value)}
              required
            />
          </label>
        </div>
        <button className="Idea-Button" type="submit">Submit Idea</button>
      </form>

      {/* Voting Table */}
      <h2>Submitted Ideas</h2>
      <table className="Voting-table" border="6" style={{ width: "100%", textAlign: "left", backgroundColor: "lightblue" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Votes</th>
            <th>Vote</th>
          </tr>
        </thead>
        <tbody>
          {Ideas.map((idea) => (
            <tr key={idea.id}>
              <td>{idea.Title}</td>
              <td>{idea.Description}</td>
              <td>{idea.votes || 0}</td>
              <td>
                <button
                  onClick={() => handleVote(idea.id)}
                  disabled={idea.userId === userId} // Disable vote if the current user added the idea.
                >
                  Vote
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
