import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebsiteComponent } from '../../src/app/website/website.component';
import { HeaderComponent } from '../../src/app/shared/layout/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Website Component', () => {
  let fixture: ComponentFixture<WebsiteComponent>;
  let website: WebsiteComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteComponent, HeaderComponent],
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(WebsiteComponent);
    website = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(website).toBeTruthy();
  });
});
