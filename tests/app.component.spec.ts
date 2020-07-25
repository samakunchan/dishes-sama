import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../src/app/app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(app).toBeTruthy();
  });
});
