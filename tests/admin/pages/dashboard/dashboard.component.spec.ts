import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DashboardComponent } from '../../../../src/app/admin/pages/dashboard/dashboard.component';

describe('Dashboard component', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let app: DashboardComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(app).toBeTruthy();
  });
});
