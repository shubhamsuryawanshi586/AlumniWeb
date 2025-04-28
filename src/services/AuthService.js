import axios from 'axios';

const API_BASE = 'http://localhost:8080';

class AuthService {
  // ✅ Alumni Login
  async alumniLogin(email, password) {
    try {
      const response = await axios.post(`${API_BASE}/alumni/login`, { email, password });
      return { ...response.data, role: 'alumni' };
    } catch (error) {
      throw new Error('Alumni Login failed!');
    }
  }

  // ✅ Organizer Login
  async organizerLogin(email, password) {
    try {
      const response = await axios.post(`${API_BASE}/organizer/login`, { email, password });
      return { ...response.data, role: 'organizer' };
    } catch (error) {
      throw new Error('Organizer Login failed!');
    }
  }

  // ✅ Alumni Registration
  async alumniRegister(data) {
    try {
      const response = await axios.post(`${API_BASE}/alumni/register`, data);
      return response.data;
    } catch (error) {
      console.error('Alumni registration failed:', error);
      throw error;
    }
  }

  // ✅ Organizer Registration
  async organizerRegister(data) {
    try {
      const response = await axios.post(`${API_BASE}/organizer/register`, data);
      return response.data;
    } catch (error) {
      console.error('Organizer registration failed:', error);
      throw error;
    }
  }

  // ✅ Get Current Account
  getCurrentAccount() {
    try {
      const organizer = JSON.parse(localStorage.getItem('organizer'));
      if (organizer) return organizer;
    } catch {}

    try {
      const alumni = JSON.parse(localStorage.getItem('alumni'));
      if (alumni) return alumni;
    } catch {}

    return null;
  }

  // ✅ Logout
  logout() {
    localStorage.removeItem('alumni');
    localStorage.removeItem('organizer');
    window.dispatchEvent(new Event('userChanged'));
    window.location.reload();
    window.location.href = '/';
  }

  // ✅ Update Current Account
  updateCurrentAccount(updatedData) {
    if (updatedData.role === 'organizer') {
      localStorage.setItem('organizer', JSON.stringify(updatedData));
    } else {
      localStorage.setItem('alumni', JSON.stringify(updatedData));
    }
    window.dispatchEvent(new Event('userChanged'));
  }
}

export default new AuthService();
