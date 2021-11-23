import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { createCustomElement } from '@angular/elements';
import { MarkdownModule } from 'ngx-markdown';

import { CardOriginComponent } from './components/card-origin/card-origin.component';
import { CardOriginArticleLoadingComponent } from './components/card-origin-article-loading/card-origin-article-loading.component';
import { CardOriginArtricComponent } from './components/card-origin-artric/card-origin-artric.component';
import { CardOriginTitleComponent } from './components/card-origin-title/card-origin-title.component';
import { ItemArticleComponent } from './components/item-article/item-article.component';
import { ItemBreadcrumbComponent } from './components/item-breadcrumb/item-breadcrumb.component';
import { ItemPaginationComponent } from './components/item-pagination/item-pagination.component';
import { ListChildComponent } from './components/list-child/list-child.component';
import { ListParentComponent } from './components/list-parent/list-parent.component';

@NgModule({
  declarations: [
    CardOriginComponent,
    CardOriginArticleLoadingComponent,
    CardOriginArtricComponent,
    CardOriginTitleComponent,
    ItemArticleComponent,
    ItemBreadcrumbComponent,
    ItemPaginationComponent,
    ListChildComponent,
    ListParentComponent,
  ],
  imports: [BrowserModule, MarkdownModule.forRoot(), RouterModule.forRoot([])],
  exports: [RouterModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {
    const Items = [
      CardOriginComponent,
      CardOriginArticleLoadingComponent,
      CardOriginArtricComponent,
      CardOriginTitleComponent,
      ItemArticleComponent,
      ItemBreadcrumbComponent,
      ItemPaginationComponent,
      ListChildComponent,
      ListParentComponent,
    ];
    customElements.define(
      'card-origin',
      createCustomElement(CardOriginComponent, { injector })
    );
    customElements.define(
      'card-origin-article-loading',
      createCustomElement(CardOriginArticleLoadingComponent, { injector })
    );
    customElements.define(
      'card-origin-article',
      createCustomElement(CardOriginArtricComponent, { injector })
    );
    customElements.define(
      'card-origin-title',
      createCustomElement(CardOriginTitleComponent, { injector })
    );
    customElements.define(
      'item-article',
      createCustomElement(ItemArticleComponent, { injector })
    );
    customElements.define(
      'item-breadcrumb',
      createCustomElement(ItemBreadcrumbComponent, { injector })
    );
    customElements.define(
      'item-pagination',
      createCustomElement(ItemPaginationComponent, { injector })
    );
    customElements.define(
      'list-child',
      createCustomElement(ListChildComponent, { injector })
    );
    customElements.define(
      'list-parent',
      createCustomElement(ListParentComponent, { injector })
    );
  }

  ngDoBootstrap() {}
}
