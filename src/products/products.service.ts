import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from '@prisma/client';
import { PaginationDto } from 'src/common';
import { last } from 'rxjs';

@Injectable()
export class ProductsService extends PrismaClient implements OnModuleInit {

  private readonly logger = new Logger('Product service');

  onModuleInit() {
    this.$connect();
    this.logger.log('DB connected');

  }

  create(createProductDto: CreateProductDto) {
    return this.product.create({
        data: createProductDto
    })
  }

  async findAll(paginationDto: PaginationDto) {

    const {page, limit} = paginationDto;

    // para saber el total de paginas
    const totalPages = await this.product.count();
    const lastPage = Math.ceil(totalPages / limit);

    return {
      data: await  this.product.findMany({
        skip: ( page - 1 ) * limit,
        take: limit
      }),
      meta: {
        page: page,
        totalPages: totalPages,
        lastPage: lastPage
      }
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
