
const Idea = require('./models/Idea');  

module.exports = (app) => {
  
  app.get('/api/ideas', async (req, res) => {
    try {
      const ideas = await Idea.find();  
      res.json(ideas);  
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch ideas' });
    }
  });

  //Add a new idea
  app.post('/api/ideas', async (req, res) => {
    const { title, description } = req.body;  
    try {
      const newIdea = new Idea({
        title,
        description
      });
      await newIdea.save();  
      res.status(201).json(newIdea);  
    } catch (error) {
      res.status(500).json({ error: 'Failed to add idea' });
    }
  });

  
  app.put('/api/ideas/:id/vote', async (req, res) => {
    const { id } = req.params;  
    try {
      const idea = await Idea.findByIdAndUpdate(
        id,
        { $inc: { votes: 1 } },  
        { new: true }  
      );
      if (!idea) {
        return res.status(404).json({ error: 'Idea not found' });
      }
      res.json(idea);  
    } catch (error) {
      res.status(500).json({ error: 'Failed to vote' });
    }
  });
};
