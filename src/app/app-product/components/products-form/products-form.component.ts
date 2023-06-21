import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { Product } from "../../interfaces/products.interfaces";
import { ProductsService } from "../../services/products.service";
import { MessageService } from "primeng/api";
import { ActivatedRoute, Router } from "@angular/router";
import { BackendService } from "../../../app-shared-services/services/backend.service";

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  isSubmitted = false;
  editmode = false;
  catagories = [];
  // @ts-ignore
  imageDisplay: string | ArrayBuffer;

  /* productForm = new FormGroup({
     name: new FormControl('', [Validators.required]),
     brand: new FormControl('', [Validators.required]),
     price: new FormControl('', [Validators.required]),
     category: new FormControl('', [Validators.required]),
     countInStock: new FormControl('', [Validators.required]),
     description: new FormControl('', [Validators.required]),
     richDescription: new FormControl('', [Validators.required]),
     image: new FormControl('', [Validators.required]),
     isFeatured: new FormControl(false),
   })*/

  constructor(private formBuilder: FormBuilder,
              private productsService: ProductsService,
              private categoriesService: BackendService,
              private messageService: MessageService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this._initForm();
    this._getCategories();
    this._checkEditMode();
  }

  private _initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      countInStock: ['', Validators.required],
      description: ['', Validators.required],
      richDescription: [''],
      image: ['', Validators.required],
      isFeatured: [false]
    });
  }


  onFormSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) return;

    const productFormData = new FormData();
    Object.keys(this.productForm).map((key) => {
      productFormData.append(key, this.productForm[key].value);
    });
    if (this.editmode) {
      this._updateProduct(productFormData);
      this.router.navigate(['/a/p/product-list']).then();
    } else {
      this._addProduct(productFormData);
      this.router.navigate(['/a/p/product-list']).then();
    }
  }

  onCancel() {
    this.router.navigate(['/a/p/product-list']);
  }

  private _getCategories() {
    this.categoriesService
      .GetCategories()
      .subscribe((categories) => {
        // @ts-ignore
        this.catagories = categories;
      });
  }

  private _addProduct(productData: FormData) {
    this.productsService.CreateProducts(productData).subscribe((product: Product) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: `Product ${product.name} is created!`
          });
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Product is not created!'
          });
        }
      );

  }

  private _updateProduct(productFormData: FormData) {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.productsService.UpdateCategories(productFormData, id).subscribe(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Product is updated!'
          });
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Product is not updated!'
          });
        })
    })
  }


  private _checkEditMode() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.editmode = true;
        this.productsService.GetProductsId(params['id']).subscribe((product: any) => {
          console.log('product update value', product);
          this.productForm["name"].setValue(product.name);
          this.productForm["category"].setValue(product.category.id);
          this.productForm["brand"].setValue(product.brand);
          this.productForm["price"].setValue(product.price);
          this.productForm["countInStock"].setValue(product.countInStock);
          this.productForm["isFeatured"].setValue(product.isFeatured);
          this.productForm["description"].setValue(product.description);
          this.productForm["richDescription"].setValue(product.richDescription);
          this.imageDisplay = product.image;
          this.productForm["image"].setValidators([]);
          this.productForm["image"].updateValueAndValidity();
        })
      }
    })
  }

  // @ts-ignore
  onImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({image: file})
      this.form.get('image')?.updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = () => {
        // @ts-ignore
        this.imageDisplay = fileReader.result;
      };
      fileReader.readAsDataURL(file);
      this.isSubmitted = true;
    }
  }

  get productForm() {
    return this.form.controls;
  }
}
