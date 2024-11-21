import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { permissions } from 'src/configs/config';

@Controller('permissions')
export class PermissionsController {
  @Get('')
  async getPermissionsByUser(@Req() req: Request, @Res() res: Response) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const request = await fetch(
      `https://api.escuelajs.co/api/v1/auth/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const user = await request.json();
    return res.json(permissions.find((p) => p.userId === user.id).permissions);
  }
}
