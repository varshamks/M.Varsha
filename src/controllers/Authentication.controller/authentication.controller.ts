import { Controller, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import { Authentication } from '../../../src/services/authentication.service/authentication.service';

@Controller('auth')
export class Auth{
  @Post('signup')
  async Register(req:Request,res:Response){
    try {
      console.log(req.body)
      const existingUser = await Authentication.FindOne(req.body.gmail);
      if (existingUser) {
        return res.json({ message: 'User already exists' });
      } else {
        const newUser=await Authentication.InsertOneAuth(req.body)
      return res.status(201).json({ message: 'User created successfully', user: newUser });
      }
    } catch (error) {
      console.error('Error during signup:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  @Post('usercheck')
  async Login(req:Request,res:Response){
    try {  
      const user = await Authentication.FindOne(req.body.gmail);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      if (user.Password !== req.body.password) {
        return res.status(401).json({ message: 'Incorrect password' });
      }
  
      return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}