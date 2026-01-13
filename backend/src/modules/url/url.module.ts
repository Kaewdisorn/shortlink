import { Module } from '@nestjs/common';
import { UrlController } from './presentation/controllers/url.controller';

@Module({
    controllers: [UrlController],
    providers: [],
})
export class UrlModule { }
