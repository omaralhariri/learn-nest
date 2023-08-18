import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    @HttpCode(200)
    findAll(): string {
        return 'This action returns all cats';
    }
}
