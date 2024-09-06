import { Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
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
    // numero de la ultima pagina, con math.ceil redondeamos el resultado hacia arriba
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

   async findOne(id: number) {
    const product = await this.product.findFirst({
      where : { id: id}
    });
    if(!product){
      throw new NotFoundException(`Product with id #${id} not found`);
    }

    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.findOne(id);

    return this.product.update({
      where : { id: id},
      data: updateProductDto
    })
    
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.product.delete({
      where: {id: id}
    })
  }
}
