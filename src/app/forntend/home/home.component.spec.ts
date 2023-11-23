import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxCardModule, IgxBadgeModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxToggleModule, IgxDialogModule, IgxBannerModule, IgxCheckboxModule, IgxInputGroupModule } from '@infragistics/igniteui-angular';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxCardModule, IgxBadgeModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxToggleModule, IgxDialogModule, IgxBannerModule, IgxCheckboxModule, IgxInputGroupModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
