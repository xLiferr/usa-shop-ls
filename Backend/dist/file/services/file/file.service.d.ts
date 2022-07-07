/// <reference types="node" />
import { File } from 'src/entities/file.entity';
import { Repository } from 'typeorm';
export declare class FileService {
    private fileRepo;
    constructor(fileRepo: Repository<File>);
    uploadFile(dataBuffer: Buffer, filename: string): Promise<File>;
    getFileById(fileId: number): Promise<File>;
}
