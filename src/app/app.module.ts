import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { SearchComponent } from './components/container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './components/container/product-list/product/product.component';
import { FilterComponent } from './components/container/product-list/filter/filter.component';
import { ProductListComponent } from './components/container/product-list/product-list.component';
import { ProductDetailComponent } from './components/container/product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './components/container/featured-brands/featured-brands.component';
import { SetBackground } from './components/CustomDirectives/SetBackground.directive';
import { HighlightDirective } from './components/CustomDirectives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    TopHeaderComponent,
    SearchComponent,
    ProductComponent,
    FilterComponent,
    ProductListComponent,
    ProductDetailComponent,
    FeaturedBrandsComponent,
    SetBackground,
    HighlightDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
