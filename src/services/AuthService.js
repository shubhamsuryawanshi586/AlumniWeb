import axios from 'axios';

const API_BASE = 'http://localhost:8080';

class AuthService {
  // ✅ User Login
  async Login(email, password) {
    try {
      const response = await axios.post(`${API_BASE}/login`, { email, password });
      return response.data; // Return the user object
    } catch (error) {
      throw new Error('Login failed!');
    }
  }

 

  // ✅ User Registration
  async userRegister(data) {
    try {
      const response = await axios.post(`${API_BASE}/register`, data);
      return response.data;
    } catch (error) {
      console.error('User registration failed:', error);
      throw error;
    }
  }

  // ✅ Admin Registration
  async adminRegister(data) {
    try {
      const response = await axios.post(`${API_BASE}/register`, data);
      return response.data;
    } catch (error) {
      console.error('Admin registration failed:', error);
      throw error;
    }
  }

  // ✅ Get current logged-in user/admin
  getCurrentAccount() {
    try {
      const admin = JSON.parse(localStorage.getItem('admin'));
      if (admin) return admin;
    } catch {}

    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) return user;
    } catch {}

    return null;
  }

  // ✅ Logout
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('admin');
    window.dispatchEvent(new Event('userChanged'));
     window.location.reload(); // Refresh the page
    window.location.href = '/';
  }

  // ✅ Update current account
  updateCurrentAccount(updatedData) {
    if (updatedData.user_role_name === 'Admin') {
      localStorage.setItem('admin', JSON.stringify(updatedData));
    } else {
      localStorage.setItem('user', JSON.stringify(updatedData));
    }
    window.dispatchEvent(new Event('userChanged'));
  }
}

export default new AuthService();
