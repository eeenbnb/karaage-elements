import { Component, OnInit, Input } from '@angular/core';

import { KaraageBreadcrumbs } from 'src/@types/karaage-breadcrumb';

@Component({
  selector: 'item-breadcrumb',
  templateUrl: './item-breadcrumb.component.html',
  styleUrls: ['./item-breadcrumb.component.scss'],
})
export class ItemBreadcrumbComponent implements OnInit {
  @Input() breadcrumbs: KaraageBreadcrumbs = [];

  constructor() {}

  ngOnInit(): void {}
}
