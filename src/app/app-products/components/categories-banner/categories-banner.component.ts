import { Component, OnInit } from '@angular/core';
import { Category } from "../../../app-admin-categories/interfaces/category.interface";
import { Subject, takeUntil } from "rxjs";
import { BackendService } from "../../../app-shared-services/services/backend.service";

@Component({
  selector: 'app-categories-banner',
  templateUrl: './categories-banner.component.html',
  styleUrls: ['./categories-banner.component.scss']
})
export class CategoriesBannerComponent implements OnInit {
  categories: Category[] = [];
  endSubs$: Subject<any> = new Subject();

  constructor(private backendService: BackendService) {

  }

  ngOnInit(): void {
    this.backendService
      .FeaturedCategories(6)
      .pipe(takeUntil(this.endSubs$))
      .subscribe((categories) => {
        // @ts-ignore
        this.categories = categories;
      });
  }

  ngOnDestroy() {
    // @ts-ignore
    this.endSubs$.next();
    this.endSubs$.complete();
  }

}
