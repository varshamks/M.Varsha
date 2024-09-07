import { Controller, Post, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import { InsertOneEsharing, FindOneEsharing } from '../../models/feedback.model/feedback.model'; // Adjust the import path as needed

@Controller('experience')
export class ExperienceController {
  @Post('create')
  async CreateExperience(req: Request, res: Response) {
    try {
      const newExperience = await InsertOneEsharing(req.body);
      return res.status(201).json({ message: 'Experience created successfully', experience: newExperience });
    } catch (error) {
      console.error('Error during creation:', error); // Debugging log
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  @Get(':gmail')
  async GetExperienceByGmail(req: Request, res: Response) {
    try {
      const experience = await FindOneEsharing(req.body.gmail);
      if (!experience) {
        return res.status(404).json({ message: 'Experience not found' });
      }

      return res.status(200).json({ experience });
    } catch (error) {
      console.error('Error during find:', error); // Debugging log
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
