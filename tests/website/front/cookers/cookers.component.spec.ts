import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CookersComponent } from '../../../../src/app/website/front/pages/cookers/cookers.component';

describe('Cookers Component', () => {
  let fixture: ComponentFixture<CookersComponent>;
  let component: CookersComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookersComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(CookersComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
