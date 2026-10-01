import { Injectable } from '@nestjs/common';
import { registerDto } from './dto/register-dto.js';
import { User } from './entities/users-entity.js';

@Injectable()
export class AuthService {
    // register
    register(registerDto: registerDto) :User {
        // Implementation for user registration
        const newUser: User = {
            id: 1,
            username: registerDto.username,
            email: registerDto.email,
            password: registerDto.password
        };
        return newUser;
    }

    // login
    login() {}

    // forgot password
    forgotPassword() {}

    // password recovery
    passwordRecovery() {}
}
