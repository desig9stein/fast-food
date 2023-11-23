import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxAvatarModule, IgxDropDownModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [ NoopAnimationsModule, FormsModule, RouterTestingModule, IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxAvatarModule, IgxDropDownModule, IgxNavigationDrawerModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
