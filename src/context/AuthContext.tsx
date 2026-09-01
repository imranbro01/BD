import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  isLoggedIn: boolean;
  login: (email: string, role?: UserRole) => boolean;
  loginAsDemoAdmin: () => void;
  loginAsDemoCustomer: () => void;
  register: (name: string, email: string, phone: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('cholo_ghuri_user');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  const saveUser = (u: User | null) => {
    setUser(u);
    if (u) {
      localStorage.setItem('cholo_ghuri_user', JSON.stringify(u));
    } else {
      localStorage.removeItem('cholo_ghuri_user');
    }
  };

  const login = (email: string, role: UserRole = 'customer'): boolean => {
    // If admin email pattern or explicitly specified
    const isAdminEmail = email.toLowerCase().includes('admin') || email === 'eleashahmed6223@gmail.com';
    const effectiveRole: UserRole = isAdminEmail ? 'admin' : role;

    const loggedUser: User = {
      id: 'usr_' + Date.now(),
      name: effectiveRole === 'admin' ? 'Admin Eleash Ahmed' : 'Traveler ' + email.split('@')[0],
      email: email,
      phone: effectiveRole === 'admin' ? '01312816223' : '01711223344',
      role: effectiveRole,
      avatar: effectiveRole === 'admin'
        ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
        : 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      createdAt: new Date().toISOString()
    };
    saveUser(loggedUser);
    return true;
  };

  const loginAsDemoAdmin = () => {
    const adminUser: User = {
      id: 'usr_admin_master',
      name: 'Eleash Ahmed (Admin)',
      email: 'eleashahmed6223@gmail.com',
      phone: '01312816223',
      role: 'admin',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      createdAt: '2026-01-01'
    };
    saveUser(adminUser);
  };

  const loginAsDemoCustomer = () => {
    const customerUser: User = {
      id: 'usr_traveler_demo',
      name: 'Imran Ahmed (Traveler)',
      email: 'imranbro830@gmail.com',
      phone: '01712345678',
      role: 'customer',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      createdAt: '2026-08-15'
    };
    saveUser(customerUser);
  };

  const register = (name: string, email: string, phone: string): boolean => {
    const newUser: User = {
      id: 'usr_' + Date.now(),
      name,
      email,
      phone,
      role: 'customer',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      createdAt: new Date().toISOString()
    };
    saveUser(newUser);
    return true;
  };

  const logout = () => {
    saveUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin: user?.role === 'admin',
        isLoggedIn: !!user,
        login,
        loginAsDemoAdmin,
        loginAsDemoCustomer,
        register,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
