import { Controller, Get } from '@nestjs/common';

@Controller()
export class UrlController {
    @Get()
    getHello(): string {
        return 'Hello World';
    }
}
