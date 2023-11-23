import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { StatsComponent } from './stats/stats.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [{ path: '', component: AdminComponent, children: [{ path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent, data: { text: 'products' } }, { path: 'stats', component: StatsComponent, data: { text: 'stats' } }, { path: 'sales', component: SalesComponent, data: { text: 'sales' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
