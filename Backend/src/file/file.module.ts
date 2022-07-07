import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from 'src/entities/file.entity';
import { FileController } from './controllers/file/file.controller';
import { FileService } from './services/file/file.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([File])
  ],
  controllers: [FileController],
  providers: [FileService]
})
export class FileModule {}
