import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdministrationComponent } from './app-administration.component';

describe('AppAdministrationComponent', () => {
  let component: AppAdministrationComponent;
  let fixture: ComponentFixture<AppAdministrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppAdministrationComponent]
    });
    fixture = TestBed.createComponent(AppAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
