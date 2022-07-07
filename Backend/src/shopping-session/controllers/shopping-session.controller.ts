import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ShoppingSessionService } from '../services/shopping-session.service';

@Controller('shopping-session')
export class ShoppingSessionController {
  constructor(private shoppingSessionService: ShoppingSessionService) {}

  @Get(':id')
  public findOne(@Param('id') id: string) {
    return this.shoppingSessionService.getShoppingSession(parseInt(id));
  }

  @Post('create')
  public createShoppingSession(@Body() body) {
    return this.shoppingSessionService.create(body);
  }

  @Put(':id')
  public updateShoppingSession(@Param('id') id: string, @Body() body ) {
    return this.shoppingSessionService.update(id, body);
  }

  @Delete(':id')
  public deleteShoppingSession(@Param('id') id: string) {
    return this.shoppingSessionService.delete(id);
  }
}
