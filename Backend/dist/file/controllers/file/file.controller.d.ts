/// <reference types="multer" />
import { StreamableFile } from '@nestjs/common';
import { FileService } from 'src/file/services/file/file.service';
import { Response } from 'express';
export declare class FileController {
    private FileService;
    constructor(FileService: FileService);
    addFile(file: Express.Multer.File): Promise<import("../../../entities/file.entity").File>;
    getDatabaseFileById(id: number, response: Response): Promise<StreamableFile>;
}
