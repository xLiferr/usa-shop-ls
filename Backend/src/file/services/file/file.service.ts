import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from 'src/entities/file.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File) private fileRepo: Repository<File>,
  ) {}

  public async uploadFile(dataBuffer: Buffer, filename: string) {
    const newFile = await this.fileRepo.create(
      {
        filename,
        data: dataBuffer
      }
    )
    return await this.fileRepo.save(newFile);
     
  }

  public async getFileById(fileId: number) {
    return await this.fileRepo.findOne(fileId);
  }
}
