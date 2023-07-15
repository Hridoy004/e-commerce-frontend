import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  // @ts-ignore
  selectedImage: string;

  @Input() images: string[] | undefined;

  constructor() {

  }

  ngOnInit(): void {
    if (this.images?.length) {
      this.selectedImage = this.images[0];
    }
  }

  changeSelectedImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  get hasImages() {
    // @ts-ignore
    return this.images?.length > 0;
  }

}
