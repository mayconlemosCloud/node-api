import { Request, Response } from 'express';
import userService from '../services/userService';

class UserController {
  async getAllUsers(req: Request, res: Response): Promise<Response> {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching users', error });
    }
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const user = await userService.createUser(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating user', error });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      await userService.deleteUser(Number(req.params.id));
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting user', error });
    }
  }

  async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const updatedUser = await userService.updateUser(Number(req.params.id), req.body);
      if (!updatedUser) return res.status(404).json({ message: 'User not found' });
      return res.json(updatedUser);
    } catch (error) {
      return res.status(500).json({ message: 'Error updating user', error });
    }
  }

  async findUserById(req: Request, res: Response): Promise<Response> {
    try {
      const user = await userService.findUserById(Number(req.params.id));
      if (!user) return res.status(404).json({ message: 'User not found' });
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ message: 'Error finding user', error });
    }
  }
}

export default new UserController();
