import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxButtonModule, IgxRippleModule, IgxAvatarModule, IgxToggleModule, IgxIconModule, IgxBadgeModule, IgxDialogModule, IgxDropDownModule } from '@infragistics/igniteui-angular';
import { ForntendComponent } from './forntend.component';

describe('ForntendComponent', () => {
  let component: ForntendComponent;
  let fixture: ComponentFixture<ForntendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForntendComponent ],
      imports: [ NoopAnimationsModule, FormsModule, RouterTestingModule, IgxButtonModule, IgxRippleModule, IgxAvatarModule, IgxToggleModule, IgxIconModule, IgxBadgeModule, IgxDialogModule, IgxDropDownModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForntendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
