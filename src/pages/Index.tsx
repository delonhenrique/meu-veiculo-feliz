import { useState } from "react";
import Login from "@/components/Login";
import UserRegister from "@/components/UserRegister";
import VehicleRegister from "@/components/VehicleRegister";
import Dashboard from "@/components/Dashboard";

type Screen = 'login' | 'register' | 'dashboard' | 'vehicle-register';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentScreen('dashboard');
  };

  const handleRegisterSuccess = () => {
    setCurrentScreen('login');
  };

  const handleVehicleRegisterSuccess = () => {
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentScreen('login');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return (
          <Login
            onLoginSuccess={handleLoginSuccess}
            onNavigateToRegister={() => setCurrentScreen('register')}
          />
        );
      case 'register':
        return (
          <UserRegister
            onRegisterSuccess={handleRegisterSuccess}
            onNavigateToLogin={() => setCurrentScreen('login')}
          />
        );
      case 'dashboard':
        return (
          <Dashboard
            onNavigateToVehicleRegister={() => setCurrentScreen('vehicle-register')}
            onLogout={handleLogout}
          />
        );
      case 'vehicle-register':
        return (
          <VehicleRegister
            onRegisterSuccess={handleVehicleRegisterSuccess}
            onBack={() => setCurrentScreen('dashboard')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="font-['Inter'] antialiased">
      {renderScreen()}
    </div>
  );
};

export default Index;
