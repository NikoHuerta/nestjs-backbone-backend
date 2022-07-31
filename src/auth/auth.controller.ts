import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @UseGuards(LocalAuthGuard)
    @Post('login-localStrategy')
    async loginLocale(@Request() req) {
        return req.user;
    }

    @UseGuards(LocalAuthGuard)
    @Post('login-jwtStrategy')
    async loginJwt(@Request() req) {
        return this.authService.login(req.user);
    }
}
