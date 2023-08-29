import { Component, OnInit } from '@angular/core';
import { IProduct } from './interface/product.interface';
import { ProductService } from './product.service';
import { Subscription } from "rxjs";
@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
    pageTitle = 'Product List';
    isShowImage: boolean = true;
    listFilter: string = "";
    sub!: Subscription;
    errorMessage = '';
    // get listFilter(): string {
    //     return this._listFilter;
    // }
    // set listFIlter(value: string) {
    //     this._listFilter = value;
    //     this.filteredProducts = this.searchText(value);
    // }

    filteredProducts: IProduct[] = [];
    products: IProduct[] = this.productService.getProductsArray();

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.filteredProducts = this.productService.getProductsArray();
        // this.sub = this.productService.getProducts().subscribe({
        //     next: products => {
        //         this.products = products;
        //         this.filteredProducts = this.products;
        //     },
        //     error: err => {
        //         this.errorMessage = err;
        //     }
        // });
        console.log("OnInit working...")
    }

    toggleImageText() {
        this.isShowImage = !this.isShowImage;
    }

    searchText(event: any) {
        debugger;
        this.filteredProducts = this.products.filter((product) => {
            return product.productName.toLocaleLowerCase().includes(event.toLocaleLowerCase());
        });
    }

    onRatingClicked(message: string) {
        console.log("Parent is notified...")
        this.pageTitle = 'Product List: ' + message;
    }
}