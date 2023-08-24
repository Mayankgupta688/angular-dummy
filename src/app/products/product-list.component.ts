import { Component, OnInit } from '@angular/core';
import { IProduct } from './interface/product.interface';
@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
    pageTitle = 'Product List';
    isShowImage: boolean = true;
    listFilter: string = "";
    products: IProduct[] = [
        {
            productId: 1,
            productName: 'Leaf Rake',
            productCode: 'GDN-0011',
            releaseDate: 'March 19, 2019',
            description: 'Leaf rake with 48-inch wooden handle.',
            price: 19.95,
            starRating: 3.2,
            imageUrl: 'https://bhoomigardencentre.b-cdn.net/wp-content/uploads/2022/03/garden-rake-111.jpg'
        },
        {
            productId: 2,
            productName: 'Garden Cart',
            productCode: 'GDN-0023',
            releaseDate: 'March 18, 2019',
            description: '15 gallon capacity rolling garden cart',
            price: 32.99,
            starRating: 4.2,
            imageUrl: 'https://pyxis.nymag.com/v1/imgs/350/657/a5a9d7ab25bc900fdc44717a4d99757bbb-garden-cart-lede.rhorizontal.w700.jpg'
        }
    ];

    ngOnInit() {
        console.log("OnInit working...")
    }

    toggleImageText() {
        this.isShowImage = !this.isShowImage;
    }
}