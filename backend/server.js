const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const cors = require('cors');
const serviceAccount = require('./serviceAccountKey'); 


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount), 
});

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

//Check if user exists
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    
    const userRecord = await admin.auth().getUserByEmail(email);

    if (!userRecord) {
      
      return res.status(404).json({ message: 'User not found. Please sign up first.' });  //Message is displayed if user is not found.
    }

    
    const customToken = await admin.auth().createCustomToken(userRecord.uid);

   
    return res.status(200).json({ message: 'Login successful', token: customToken });  //If user is found then the message will appear.

  } catch (error) {
    console.error('Error during login:', error);

   
    if (error.code === 'auth/user-not-found') {
      return res.status(404).json({ message: 'User not found. Please sign up first.' });
    }

    
    return res.status(401).json({ message: 'Invalid credentials or internal error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
