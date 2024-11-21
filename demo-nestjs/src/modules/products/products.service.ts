import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
const products = [
  {
    id: 1,
    name: 'Sản phẩm 1',
    price: 12000,
    created_by: 3,
    description: 'Mô tả sản phẩm 1',
  },
  {
    id: 2,
    name: 'Sản phẩm 2',
    price: 12000,
    created_by: 3,
    description: 'Mô tả sản phẩm 2',
  },
  {
    id: 3,
    name: 'Sản phẩm 3',
    price: 12000,
    created_by: 4,
    description: 'Mô tả sản phẩm 3',
  },
  {
    id: 4,
    name: 'Sản phẩm 4',
    price: 15000,
    created_by: 4,
    description: 'Mô tả sản phẩm 4',
  },
];
@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll(userId: null | number) {
    if (userId) {
      return products.filter(
        (product: { created_by: number }) => product.created_by === userId,
      );
    }
    return products;
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
