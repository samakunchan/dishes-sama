import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../src/app/app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [MatSidenavModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(app).toBeTruthy();
  });
});
