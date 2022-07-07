import { AppService } from './app.service';
import { AuthService } from './auth/services/auth/auth.service';
export declare class AppController {
    private appService;
    private authService;
    constructor(appService: AppService, authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
        id: any;
    }>;
    getProfile(req: any): any;
}
