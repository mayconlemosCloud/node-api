import userService from './userService';
import User from '../models/userModel';

describe('UserService', () => {
  it('should create a user', async () => {
    const user: User = { id: 0, name: 'John Doe', email: 'john@example.com' };
    const createdUser = await userService.createUser(user);
    expect(createdUser).toHaveProperty('id');
    expect(createdUser.name).toBe('John Doe');
  });

  it('should get all users', async () => {
    const users = await userService.getAllUsers();
    expect(users.length).toBeGreaterThan(0);
  });
});
