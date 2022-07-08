/// <reference types="node" />
import { File } from 'src/entities/file.entity';
import { QueryRunner, Repository } from 'typeorm';
export declare class FileService {
    private fileRepo;
    constructor(fileRepo: Repository<File>);
    uploadFile(dataBuffer: Buffer, filename: string): Promise<File>;
    uploadDatabaseFileWithQueryRunner(dataBuffer: Buffer, filename: string, queryRunner: QueryRunner): Promise<File>;
    getFileById(id: number): Promise<File>;
    deleteFileWithQueryRunner(id: number, queryRunner: QueryRunner): Promise<void>;
}
