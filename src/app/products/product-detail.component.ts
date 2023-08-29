import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './interface/product.interface';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html'
})

export class ProductDetailPage {
    pageTitle = 'Product Detail';
    errorMessage = '';
    product: IProduct | undefined;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService) {
    }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if (id) {
            this.getProduct(id);
        }
    }

    getProduct(id: number): void {
        this.product = this.productService.getProduct(id);
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }
}