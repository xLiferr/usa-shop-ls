import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from 'src/entities/file.entity';
import { QueryRunner, Repository } from 'typeorm';

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
    await this.fileRepo.save(newFile);
    return newFile;
     
  }

  async uploadDatabaseFileWithQueryRunner(dataBuffer: Buffer, filename: string, queryRunner: QueryRunner) {
    const newFile = await queryRunner.manager.create(File, {
      filename,
      data: dataBuffer
    })
    await queryRunner.manager.save(File, newFile);
    return newFile;
  }

  public async getFileById(id: number) {
    return await this.fileRepo.findOne(id);
  }

  async deleteFileWithQueryRunner(id: number, queryRunner: QueryRunner) {
    const deleteResponse = await queryRunner.manager.delete(File, id);
    if (!deleteResponse.affected) {
      throw new NotFoundException();
    }
  }
}
