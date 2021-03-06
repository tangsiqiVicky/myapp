import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private imgUrl= 'http://placehold.it/320x150';
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 1.5, '这是一个商品描述', ['电子产品', '硬件设备']),
      new Product(2, '第二个商品', 1.99, 2.5, '这是二个商品描述', ['电子产品', '软件设备']),
      new Product(3, '第三个商品', 1.99, 3.5, '这是三个商品描述', ['电子产品', '手机设备']),
      new Product(4, '第四个商品', 1.99, 4.5, '这是四个商品描述', ['服装', '连衣裙']),
      new Product(5, '第五个商品', 1.99, 5.5, '这是五个商品描述', ['古董', '瓷器']),
      new Product(6, '第六个商品', 1.99, 3.5, '这是六个商品描述', ['图书'])
    ];
    this.products.push(new Product(7, '第七个商品' , 2.33, 4.5 , '这是第七个商品', ['保健品']));

  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}
