import React, { createContext, useState, useContext, ReactNode } from 'react';

interface BrightnessContextProps {
  brightness: number;
  changeBrightness: (value: number) => void;
}

const BrightnessContext = createContext<BrightnessContextProps | undefined>(undefined);

export const BrightnessProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [brightness, setBrightness] = useState<number>(100); // Initial brightness value

  const changeBrightness = (value: number) => {
    setBrightness(value);
  };

  return (
    <BrightnessContext.Provider value={{ brightness, changeBrightness }}>
      {children}
    </BrightnessContext.Provider>
  );
};

export const useBrightness = (): BrightnessContextProps => {
  const context = useContext(BrightnessContext);
  if (!context) {
    throw new Error('useBrightness must be used within a BrightnessProvider');
  }
  return context;
};
