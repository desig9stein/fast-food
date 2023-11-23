import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForntendComponent } from './forntend.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{ path: '', component: ForntendComponent, children: [{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } }, { path: 'menu', component: MenuComponent, data: { text: 'Menu' } }, { path: 'reservations', component: ReservationsComponent, data: { text: 'Reservations' } }, { path: 'profile', component: ProfileComponent, data: { text: 'Profile' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForntendRoutingModule {
}
