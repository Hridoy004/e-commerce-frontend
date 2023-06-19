import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { Product } from "../../interfaces/products.interfaces";
import { ProductsService } from "../../services/products.service";
import { MessageService } from "primeng/api";
import { ActivatedRoute } from "@angular/router";
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

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private categoriesService: BackendService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._initForm();
    this._getCategories();
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

  }

  onCancel() {

  }

  private _getCategories() {
    this.categoriesService
      .GetCategories()
      .subscribe((categories) => {
        // @ts-ignore
        this.catagories = categories;
      });
  }

  // @ts-ignore
  onImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        // @ts-ignore
        this.imageDisplay = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    }
  }

  get productForm() {
    return this.form.controls;
  }

}
