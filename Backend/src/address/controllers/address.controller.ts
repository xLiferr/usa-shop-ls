import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AddressService } from '../services/address.service';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Get('all')
  public findAll() {
    return this.addressService.getAddresses();
  }

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.addressService.getAddress(parseInt(id));
  }

  @Get('user/:userId')
  public findByUser(@Param('userId') userId: string) {
    return this.addressService.getAddressByUser(parseInt(userId));
  }

  @Post('create')
  public createAddress(@Body() body) {
    return this.addressService.create(body);
  }

  @Put(':id')
  public updateAddress(@Param('id') id: string, @Body() body ) {
    return this.addressService.update(id, body);
  }

  @Delete(':id')
  public deleteAddress(@Param('id') id: string) {
    return this.addressService.delete(id);
  }
  
}
