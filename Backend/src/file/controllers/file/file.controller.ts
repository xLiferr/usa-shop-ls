import { Controller, Get, Param, ParseIntPipe, Post, Req, Res, StreamableFile, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from 'src/file/services/file/file.service';
import { Express, Response } from 'express';
import multer from 'multer';
import { Readable } from 'stream';

@Controller('file')
export class FileController {
  constructor(private FileService: FileService) {}

  @Post('add-img')
  @UseInterceptors(FileInterceptor('file'))
  async addFile( @UploadedFile() file: Express.Multer.File ) {
    return this.FileService.uploadFile(file.buffer, file.originalname);
  }

  @Get(':id')
  async getDatabaseFileById(@Param('id', ParseIntPipe) id: number, @Res({ passthrough: true }) response: Response) {
    const file = await this.FileService.getFileById(id);
 
    const stream = Readable.from(file.data);
 
    response.set({
      'Content-Disposition': `inline; filename="${file.filename}"`,
      'Content-Type': 'image'
    })
 
    return new StreamableFile(stream);
  }

}
