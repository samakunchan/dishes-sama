import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebsiteComponent } from '../../src/app/website/website.component';
import { HeaderComponent } from '../../src/app/shared/layout/header/header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Website Component', () => {
  let fixture: ComponentFixture<WebsiteComponent>;
  let website: WebsiteComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteComponent, HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(WebsiteComponent);
    website = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(website).toBeTruthy();
  });
});
