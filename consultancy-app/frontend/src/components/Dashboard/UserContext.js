import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [chosenInterests, setChosenInterests] = useState([]);
  const [chosenSkills, setChosenSkills] = useState([]);

  const loginUser = (email) => {
    setUserEmail(email);
    localStorage.setItem('userEmail', email);
  };

  const logoutUser = () => {
    setUserEmail(null);
    localStorage.removeItem('userEmail');
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ userEmail, loginUser, logoutUser, chosenInterests, setChosenInterests, chosenSkills, setChosenSkills }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
