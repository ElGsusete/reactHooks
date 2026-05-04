import React, { createContext, useContext, useState } from 'react';

const UserConfigContext = createContext();

export const UserConfigProvider = ({ children }) => {
  const [config, setConfig] = useState({
    language: 'Español',
    notifications: true,
    fontSize: 'normal'
  });

  const updateConfig = (newConfig) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  return (
    <UserConfigContext.Provider value={{ config, updateConfig }}>
      {children}
    </UserConfigContext.Provider>
  );
};

export const useUserConfig = () => {
  const context = useContext(UserConfigContext);
  if (!context) {
    throw new Error('useUserConfig debe usarse dentro de UserConfigProvider');
  }
  return context;
};
