import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { IgxTreeGridModule, IgxActionStripModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxAvatarModule, IgxDropDownModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { StatsComponent } from './stats/stats.component';
import { IgxCategoryChartModule, IgxPieChartModule } from 'igniteui-angular-charts';
import { SalesComponent } from './sales/sales.component';

@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    StatsComponent,
    SalesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    IgxTreeGridModule,
    IgxActionStripModule,
    FormsModule,
    IgxCategoryChartModule,
    IgxPieChartModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxIconModule,
    IgxAvatarModule,
    IgxDropDownModule,
    IgxNavigationDrawerModule
  ]
})
export class AdminModule {
}
