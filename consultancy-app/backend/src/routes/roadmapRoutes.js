const express = require('express');
const router = express.Router();


router.post('/', (req, res) => {
  const { chosenSkills, chosenInterests } = req.body;

  
  const roadmapData = [
    {
      title: 'Career Milestone 1',
      description: 'Description for Milestone 1',
      studyResources: 'https://example.com/resource1',
    },
    {
      title: 'Career Milestone 2',
      description: 'Description for Milestone 2',
      studyResources: 'https://example.com/resource2',
    },
    
  ];

  res.json({ roadmapData });
});

module.exports = router;
