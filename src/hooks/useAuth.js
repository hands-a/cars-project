import { useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = window.localStorage.getItem('apex_user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  });

  const login = (email, password) => {
    try {
      const users = JSON.parse(window.localStorage.getItem('apex_users') || '[]');
      const foundUser = users.find(u => u.email === email && u.password === password);

      if (foundUser) {
        // eslint-disable-next-line no-unused-vars
        const { password: _, ...userSession } = foundUser;
        setUser(userSession);
        window.localStorage.setItem('apex_user', JSON.stringify(userSession));
        return { success: true };
      }
      return { success: false, error: 'Invalid email or password' };
    } catch (error) {
      console.error(error);
      return { success: false, error: 'Login failed due to system error' };
    }
  };

  const register = (name, email, password) => {
    try {
      const users = JSON.parse(window.localStorage.getItem('apex_users') || '[]');
      if (users.find(u => u.email === email)) {
        return { success: false, error: 'Email already exists' };
      }

      const newUser = { id: Date.now().toString(), name, email, password, createdAt: new Date().toISOString() };
      users.push(newUser);
      window.localStorage.setItem('apex_users', JSON.stringify(users));

      // eslint-disable-next-line no-unused-vars
      const { password: _, ...userSession } = newUser;
      setUser(userSession);
      window.localStorage.setItem('apex_user', JSON.stringify(userSession));

      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, error: 'Registration failed due to system error' };
    }
  };

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem('apex_user');
  };

  const generateResetCode = (email) => {
    const users = JSON.parse(window.localStorage.getItem('apex_users') || '[]');
    if (!users.find(u => u.email === email)) {
      return { success: false, error: 'Email not found in our system' };
    }
    window.localStorage.setItem(`reset_${email}`, '123456');
    return { success: true };
  };

  const verifyResetCode = (email, code) => {
    const savedCode = window.localStorage.getItem(`reset_${email}`);
    if (savedCode === code) {
      return { success: true };
    }
    return { success: false, error: 'Invalid verification code' };
  };

  const resetPassword = (email, code, newPassword) => {
    if (window.localStorage.getItem(`reset_${email}`) !== code) {
      return { success: false, error: 'Invalid reset session' };
    }

    const users = JSON.parse(window.localStorage.getItem('apex_users') || '[]');
    const userIndex = users.findIndex(u => u.email === email);

    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      window.localStorage.setItem('apex_users', JSON.stringify(users));
      window.localStorage.removeItem(`reset_${email}`);
      return { success: true };
    }
    return { success: false, error: 'User not found' };
  };

  return { user, isAuthenticated: !!user, login, register, logout, generateResetCode, verifyResetCode, resetPassword };
};
