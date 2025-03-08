import User from '../models/userModel';

class UserService {
  private users: User[] = [];

  async getAllUsers(): Promise<User[]> {
    try {
      return this.users;
    } catch (error) {
      throw new Error('Error fetching users');
    }
  }

  async createUser(user: User): Promise<User> {
    try {
      user.id = this.users.length + 1;
      this.users.push(user);
      return user;
    } catch (error) {
      throw new Error('Error creating user');
    }
  }

  async deleteUser(id: number): Promise<void> {
    try {
      this.users = this.users.filter(user => user.id !== id);
    } catch (error) {
      throw new Error('Error deleting user');
    }
  }

  async updateUser(id: number, updatedUser: Partial<User>): Promise<User | null> {
    try {
      const userIndex = this.users.findIndex(user => user.id === id);
      if (userIndex === -1) return null;
      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser };
      return this.users[userIndex];
    } catch (error) {
      throw new Error('Error updating user');
    }
  }

  async findUserById(id: number): Promise<User | null> {
    try {
      return this.users.find(user => user.id === id) || null;
    } catch (error) {
      throw new Error('Error finding user');
    }
  }
}

export default new UserService();
