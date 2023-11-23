import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForntendRoutingModule } from './forntend-routing.module';
import { ForntendComponent } from './forntend.component';
import { HomeComponent } from './home/home.component';
import { IgxCardModule, IgxBadgeModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxToggleModule, IgxDialogModule, IgxBannerModule, IgxCheckboxModule, IgxInputGroupModule, IgxTabsModule, IgxSelectModule, IgxNavigationDrawerModule, IgxAvatarModule, IgxDropDownModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    ForntendComponent,
    HomeComponent,
    MenuComponent,
    ReservationsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ForntendRoutingModule,
    IgxCardModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxIconModule,
    IgxToggleModule,
    IgxDialogModule,
    IgxBannerModule,
    IgxCheckboxModule,
    IgxInputGroupModule,
    FormsModule,
    IgxTabsModule,
    IgxSelectModule,
    IgxNavigationDrawerModule,
    IgxAvatarModule,
    IgxDropDownModule
  ]
})
export class ForntendModule {
}
