import { Controller, Post, Put, Delete, Body } from '@nestjs/common';
import { TenantsService } from './tenants.service';

@Controller('polls')
export class TenantsController {
    constructor(private readonly pollsService: TenantsService){}
}