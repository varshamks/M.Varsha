import { Controller, Post, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
//import { PartnerUniversityService } from '../../models/partnerUniversity.model/partnerUniversity.model'; // Check if the import path is correct
import { PartnerUniversityService } from '../../services/partnerUniversity.service/partnerUniversity.service';


@Controller('partner-university')
export class PartnerUniversityController {
  @Post('add')
  async AddPartnerUniversity(req: Request, res: Response) {
    try {
      const newUniversity = await PartnerUniversityService.InsertOnePartnerUniversity(req.body);
      return res.status(201).json({ message: 'Partner university added successfully', university: newUniversity });
    } catch (error) {
      console.error('Error adding university:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  @Get('all')
  async GetAllPartnerUniversities(req: Request, res: Response) {
    try {
      const universities = await PartnerUniversityService.FindAllPartnerUniversities();
      return res.status(200).json({ universities });
    } catch (error) {
      console.error('Error retrieving universities:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
