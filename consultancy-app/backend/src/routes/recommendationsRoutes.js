const express = require('express');
const router = express.Router();
const { generateRecommendations } = require('../../../frontend/src/services/recommendationsService'); // Adjust the path


router.post('/', (req, res) => {
  try {
    
    const { chosenSkills } = req.body;

    console.log('Received chosenSkills:', chosenSkills); 
    const recommendations = generateRecommendations(chosenSkills);

    console.log('Generated recommendations:', recommendations); 

    
    res.json({ recommendations });
  } catch (error) {
    console.error('Error generating recommendations:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
