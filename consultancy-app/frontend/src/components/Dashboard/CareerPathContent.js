import React, { useState } from 'react';
import { Card, Typography, Button, Collapse } from 'antd';
import './CareerPathContent.css'; 
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const CareerPathContent = () => {
  const [selectedQualification, setSelectedQualification] = useState(null);

  const handleExploreClick = (qualification) => {
    setSelectedQualification(qualification);
  };

  const careerPaths = [
    {
      qualification: 'SSLC',
      description: 'Explore career paths after completing SSLC.',
      content: 'After completing SSLC, one common option is to pursue Higher Secondary Education (HSC) to enhance knowledge and open up more opportunities. It provides a solid foundation for future studies and career paths. Remember, education is the key to success, and each step you take brings you closer to achieving your goals.',
    },
    {
      qualification: 'HSC',
      description: 'Explore career paths after completing HSC.',
      content: `
        After completing HSC, students can consider exciting career paths in the rapidly evolving world of technology. Here are some key areas to explore:

        Software Development:
          - Learn popular programming languages like JavaScript, Python, or Java.
          - Explore web development, mobile app development, or software engineering. 

        Data Science and Analytics:
          - Acquire skills in data analysis and visualization.
          - Learn tools like Python, R, and SQL for data processing.

        Digital Marketing:
          - Understand online marketing strategies and tools.
          - Explore social media marketing, search engine optimization (SEO), and content marketing.

        Cybersecurity:
          - Develop skills in protecting digital systems and networks.
          - Learn about ethical hacking and cybersecurity best practices.

        Artificial Intelligence (AI) and Machine Learning (ML):
          - Explore into the world of AI and ML algorithms.
          - Explore applications in areas like natural language processing and computer vision.

         These career paths align with the latest technologies and offer exciting opportunities in today's digital landscape. It's essential to continue learning and adapting to stay competitive in the tech industry.
      `,
    },
    {
      qualification: 'UG',
      description: 'Explore career paths after completing undergraduate studies.',
      content: `
        After completing your undergraduate studies, a world of diverse career paths opens up. Here are some exciting areas to consider:
    
        Business and Management:
          - Explore roles in marketing, finance, human resources, or operations.
          - Develop leadership skills and business acumen for success in various industries.
    
        Information Technology (IT):
          - Go into the dynamic field of IT, covering areas like systems administration, network management, or IT consulting.
          - Gain proficiency in relevant technologies and stay updated on industry trends.
    
        Health Sciences:
          - Consider a career in healthcare, ranging from clinical roles to healthcare administration.
          - Stay abreast of advancements in medical technology and healthcare policies.
    
        Environmental Science:
          - Contribute to environmental conservation and sustainability efforts.
          - Explore careers in environmental research, consultancy, or policy-making.
    
        Creative Arts and Media:
          - Pursue a career in the arts, including graphic design, filmmaking, or journalism.
          - Embrace creativity and innovation in the evolving landscape of media and entertainment.
    
        Engineering:
          - Specialize in various engineering disciplines such as civil, electrical, or mechanical engineering.
          - Contribute to the design and development of innovative solutions for real-world challenges.
    
        These diverse career paths cater to a range of interests and industries. It's important to leverage your undergraduate education as a foundation while continuously adapting to the evolving demands of your chosen field.
      `,
    },
    
    {
      qualification: 'PG',
      description: 'Advance your expertise with a postgraduate qualification.',
      content: `
        After completing your undergraduate studies, pursuing a postgraduate qualification opens up new avenues for specialization and career advancement. Here are some areas to consider:
    
        Master of Science (MSc) in Computer Science:
          - Deepen your knowledge of computer science principles and advanced programming.
          - Specialize in areas like artificial intelligence, machine learning, or cybersecurity.
    
        Master of Business Administration (MBA) in Technology Management:
          - Combine technical skills with business acumen for leadership roles.
          - Explore strategic planning, project management, and innovation in the tech industry.
    
        Master of Data Science and Analytics:
          - Enhance your skills in data analysis, statistical modeling, and machine learning.
          - Apply advanced tools and techniques to extract valuable insights from data.
    
        Master of Digital Marketing:
          - Gain expertise in advanced digital marketing strategies and analytics.
          - Learn to create comprehensive online campaigns and optimize digital presence.
    
        Master of Cybersecurity:
          - Specialize in advanced cybersecurity practices and threat detection.
          - Stay updated on the latest security technologies and countermeasures.
    
        Master of Artificial Intelligence (AI) and Machine Learning (ML):
          - Dive deeper into complex algorithms and advanced applications of AI and ML.
          - Conduct research in cutting-edge areas like deep learning and neural networks.
    
        Pursuing a postgraduate qualification not only deepens your knowledge but also positions you for leadership roles in your chosen field. Consider your interests and career goals when selecting a program, and stay committed to continuous learning for sustained success.
      `,
    },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        {careerPaths.map((path) => (
          <Card key={path.qualification} style={{ width: '48%' }}>
            <Typography>
              <Title level={4}>{path.qualification}</Title>
              <Paragraph>{path.description}</Paragraph>
              <Button type="primary" onClick={() => handleExploreClick(path.qualification)}>
                Explore
              </Button>
            </Typography>
          </Card>
        ))}
      </div>

      {selectedQualification && (
        <Card>
          <Collapse>
            <Panel header={`Explore ${selectedQualification} Career Paths`} key="1">
              <Typography>
                <Title level={4}>Career Paths</Title>
                {careerPaths
                  .find((path) => path.qualification === selectedQualification)
                  .content.split('\n')
                  .map((point, index) => (
                    <Paragraph key={index} className="content-paragraph">{point.trim()}</Paragraph>
                  ))}
              </Typography>
            </Panel>
          </Collapse>
        </Card>
      )}
    </div>
  );
};

export default CareerPathContent;