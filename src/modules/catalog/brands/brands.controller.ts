import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { BrandsService } from './brands.service';

@Controller('brands')
export class BrandsController {
    constructor(private readonly brandService: BrandsService) {}

    @Post()
    create(@Body() data: any) {
        return this.brandService.create(data);
    }

    @Get()
    findAll() {
        return this.brandService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.brandService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: any) {
        return this.brandService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.brandService.remove(id);
    }
}
