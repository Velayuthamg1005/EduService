const generateRecommendations = (chosenSkills) => {
  const roadmapRecommendations = chosenSkills.map((skill) => {
    switch (skill) {
      case 'Programming':
        return {
          title: 'Explore Programming Languages',
          description: 'Learn a programming language such as Python, JavaScript, or Java. Build small projects to apply your skills and gain practical experience in software development.',
          studyResources: {
            onlinePaidCourse: 'https://www.udemy.com/course/fullstack-web-development-course-projects-base/',
            youtubeFreeCourse: 'https://youtu.be/ORyi6tTMNqE?si=EeE_oYMbJ_NB4RUY',
            onlineStudyMaterial: 'https://blog.logrocket.com/mern-stack-tutorial/',
          },
        };
      case 'Web Development':
        return {
          title: 'Web Development Journey',
          description: 'Embark on a journey in web development. Learn HTML, CSS, and JavaScript for front-end development. Explore back-end frameworks like Node.js or Django. Build a portfolio to showcase your web development skills.',
          studyResources: {
            onlinePaidCourse: 'https://www.udemy.com/course/front-end-web-development-complete-guide-step-by-step/',
            youtubeFreeCourse: 'https://youtu.be/nu_pCVPKzTk?si=8ogQYDUT5i0qNGYx',
            onlineStudyMaterial: 'https://www.geeksforgeeks.org/web-development/',
          },
        };
      case 'Database Management':
        return {
          title: 'Database Management Mastery',
          description: 'Master the art of database management. Deepen your understanding of relational and non-relational databases. Practice writing complex SQL queries and design efficient database schemas for various applications.',
          studyResources: {
            onlinePaidCourse: 'https://www.udemy.com/course/mysql-dba-for-beginners/',
            youtubeFreeCourse: 'https://youtu.be/c5HAwKX-suM?si=XFSKhMFOFZnu6Sj-',
            onlineStudyMaterial: 'https://www.geeksforgeeks.org/dbms/',
          },
        };
      case 'Network Security':
        return {
          title: 'Network Security Exploration',
          description: 'Explore the fascinating world of network security. Study fundamental concepts, protocols, and encryption techniques. Engage in hands-on activities like ethical hacking to identify and mitigate security threats.',
          studyResources: {
            onlinePaidCourse: 'https://www.udemy.com/course/network-security-course/',
            youtubeFreeCourse: 'https://youtu.be/zIWGjkr0ENE?si=Hj1XauhfiNZ9qjZQ',
            onlineStudyMaterial: 'https://www.tutorialspoint.com/network_security/index.htm',
          },
        };
      case 'Machine Learning':
        return {
          title: 'Machine Learning Dive',
          description: 'Dive into the realm of machine learning. Understand algorithms, frameworks, and methodologies. Work on projects to apply machine learning techniques to solve real-world problems.',
          studyResources: {
            onlinePaidCourse: 'https://www.udemy.com/course/complete-machine-learning-and-data-science-zero-to-mastery/',
            youtubeFreeCourse: 'https://youtu.be/GwIo3gDZCVQ?si=8QN5uvI-iZX3mrAv',
            onlineStudyMaterial: 'https://www.javatpoint.com/machine-learning',
          },
        };
      case 'Data Science':
        return {
          title: 'Data Science Mastery',
          description: 'Master the skills required for data science. Develop expertise in data analysis, visualization, and machine learning. Work on real-world data science projects to enhance your practical knowledge.',
          studyResources: {
            onlinePaidCourse: 'https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/',
            youtubeFreeCourse: 'https://youtu.be/j65ifqmhI_M?si=oSIuf0GJCVUFL5wo',
            onlineStudyMaterial: 'https://www.w3schools.com/datascience/default.asp',
          },
        };
      case 'Civil Engineering':
        return {
          title: 'Civil Engineering Exploration',
          description: 'Embark on an exploration of civil engineering. Study principles related to structural engineering, transportation, and geotechnical engineering. Work on projects to apply your knowledge in real-world scenarios.',
          studyResources: {
            onlinePaidCourse: 'https://www.udemy.com/course/interview-preparation-for-civil-engineers-in-construction/',
            youtubeFreeCourse: 'https://www.youtube.com/live/Y0Y8zuETHOQ?si=1phhPcpKrGBkJM8a',
            onlineStudyMaterial: 'https://www.engineer4free.com/',
          },
        };
      case 'Mechanical Engineering':
        return {
          title: 'Mechanical Engineering Adventure',
          description: 'Embark on an adventure in mechanical engineering. Explore concepts including thermodynamics, fluid mechanics, and materials science. Work on mechanical design projects to hone your skills.',
          studyResources: {
            onlinePaidCourse: 'https://www.udemy.com/course/mechanical-and-electrical-engineering-explained/',
            youtubeFreeCourse: 'https://youtube.com/playlist?list=PLynLXReWAxdFY65ZwPQUBYrki4q91m8vG&si=JZxaSfyux8wDPBD_',
            onlineStudyMaterial: 'https://www.mechanicaltutorial.com/',
          },
        };
      case 'Electrical Engineering':
        return {
          title: 'Electrical Engineering Focus',
          description: 'Focus on electrical engineering concepts and projects. Learn electrical circuit theory, electronics, and electrical machines. Explore areas like power systems and control systems.',
          studyResources: {
            onlinePaidCourse: 'https://www.udemy.com/course/fundamentals-of-transformer-for-electrical-power-engineering/',
            youtubeFreeCourse: 'https://youtube.com/playlist?list=PLp6ek2hDcoNCc3IgSGVjIsiMhM_Ll9FEn&si=w_b0vrdbWuyk7F3Z',
            onlineStudyMaterial: 'https://www.khanacademy.org/science/electrical-engineering',
          },
        };
      case 'Electronics and Communication Engineering':
        return {
          title: 'ECE Exploration',
          description: 'Explore electronics and communication engineering. Study electronics, communication systems, and signal processing. Engage in hands-on projects to reinforce theoretical knowledge.',
          studyResources: {
            onlinePaidCourse: 'https://www.udemy.com/course/electronic-circuits-for-beginners-analog-hardware-design/',
            youtubeFreeCourse: 'https://youtube.com/playlist?list=PLDp9Jik5WjRtkw7q3aaVvMtLJiiw62V-H&si=HXGhxxR0PE1ZUYaI',
            onlineStudyMaterial: 'https://www.electronics-tutorials.ws/',
          },
        };
      case 'Computer Aided Design (CAD)':
        return {
          title: 'CAD Mastery',
          description: 'Master Computer-Aided Design (CAD) software for 2D and 3D design. Learn to create detailed technical drawings and schematics. Work on design projects to enhance your proficiency.',
          studyResources: {
            onlinePaidCourse: 'https://www.udemy.com/course/autocad-2018-getting-started-quickly-with-autocad/',
            youtubeFreeCourse: 'https://youtu.be/VtLXKU1PpRU?si=LCO3dO1xJeVY0dXe',
            onlineStudyMaterial: 'https://www.javatpoint.com/autocad',
          },
        };
      case 'Structural Analysis':
        return {
          title: 'Structural Analysis Journey',
          description: 'Embark on a journey into structural analysis. Learn principles of structural engineering and design. Work on structural analysis projects to apply your knowledge in practical scenarios.',
          studyResources: {
            onlinePaidCourse: 'https://www.udemy.com/course/structural-analysis-i/',
            youtubeFreeCourse: 'https://youtube.com/playlist?list=PL1Qx-cxDf3x3h6aMh1vJQl6Ip1AplMkew&si=ytmBNAPlkKOc6joD',
            onlineStudyMaterial: 'https://eng.libretexts.org/Bookshelves/Civil_Engineering/Structural_Analysis_(Udoeyo)/01%3A_Chapters/1.01%3A_Introduction_to_Structural_Analysis',
          },
        };
      case 'Thermodynamics':
        return {
          title: 'Thermodynamics Deep Dive',
          description: 'Take a deep dive into thermodynamics. Study principles and applications of thermodynamics. Engage in practical projects to understand the real-world implications of thermodynamic concepts.',
          studyResources: {
            onlinePaidCourse: 'https://www.udemy.com/course/statistical-physics/',
            youtubeFreeCourse: 'https://youtube.com/playlist?list=PL9RcWoqXmzaK6AHCCyL_J6gqc02RN-w-D&si=WX9sZEwzkmI2H7VV',
            onlineStudyMaterial: 'https://www.learnthermo.com/tutorials.php',
          },
        };
      case 'Embedded Systems':
        return {
          title: 'Embedded Systems Exploration',
          description: 'Explore the world of embedded systems. Learn about embedded systems design and programming. Work on projects to develop practical skills in building embedded systems.',
          studyResources: {
            onlinePaidCourse: 'https://www.udemy.com/course/microcontroller-embedded-c-programming/',
            youtubeFreeCourse: 'https://youtube.com/playlist?list=PLmdxycs9ZIme0IXa-2iedndBukUSAnCZ6&si=KXiIdIGrYpbRnoYu',
            onlineStudyMaterial: 'https://www.tutorialspoint.com/embedded_systems/index.htm',
          },
        };
      case 'Robotics':
        return {
          title: 'Robotics Adventure',
          description: 'Embark on an adventure in robotics. Dive into robotics principles, kinematics, and dynamics. Work on robotic projects to apply theoretical concepts in real-world scenarios.',
          studyResources: {
            onlinePaidCourse: 'https://www.udemy.com/course/analog-electronics-robotics-learn-by-building/',
            youtubeFreeCourse: 'https://youtube.com/playlist?list=PL4g1oAdmuCfqmYvURLzVFkMMUI7839biN&si=WB6qDy6_f9Z0gBl4',
            onlineStudyMaterial: 'https://www.javatpoint.com/robotics-tutorial',
          },
        };
      case 'Technical Drawing and Drafting':
        return {
          title: 'Technical Drawing Mastery',
          description: 'Master the art of technical drawing and drafting. Learn techniques for creating detailed and accurate technical drawings. Work on drafting projects to enhance your proficiency.',
          studyResources: {
            onlinePaidCourse: 'https://www.udemy.com/course/provisional-patent-help/',
            youtubeFreeCourse: 'https://youtube.com/playlist?list=PLzEMaDkGIBnERCxTDR22EZ59AnyOUIg2X&si=9KPefnOqw2qqOtD-',
            onlineStudyMaterial: 'https://design.tutsplus.com/articles/technical-drawing-for-beginners-an-introduction-to-perspective--vector-21707',
          },
        };
      default:
        return {
          title: `Opportunities related to ${skill}`,
          description: `Explore opportunities related to ${skill}.`,
          studyResources: {
            onlinePaidCourse: 'https://example.com/default-paid-course',
            youtubeFreeCourse: 'https://example.com/default-youtube-course',
            onlineStudyMaterial: 'https://example.com/default-study-material',
          },
        };
    }
  });

  return roadmapRecommendations;
};

module.exports = {
  generateRecommendations,
};
