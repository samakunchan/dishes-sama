import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../../../../src/app/shared/layout/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from '../../../stubs/router-link-directive-stub';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

describe('The headerComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;
  let title: HTMLElement;
  let linkDes: any[];
  let routerLink: RouterLinkDirectiveStub[];
  let header: HeaderComponent;
  let loader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, RouterLinkDirectiveStub],
      imports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    header = fixture.debugElement.componentInstance;
    title = fixture.nativeElement.querySelector('.toolbar__title');
    linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));
    routerLink = linkDes.map((de) => de.injector.get(RouterLinkDirectiveStub));
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(header).toBeTruthy();
  });

  it('should have the title "Dishes Sama"', () => {
    expect(title.textContent).toEqual('Dishes Sama');
  });

  it('should get routerLinks from template', () => {
    expect(routerLink.length).toBe(8);
  });

  it('should see routerLinks pc from template', () => {
    expect(routerLink[0].linkParams).toBe('/');
    expect(routerLink[1].linkParams).toBe('/cookers');
    expect(routerLink[2].linkParams).toBe('/about');
    expect(routerLink[3].linkParams).toBe('/dashboard');
  });

  it('should see routerLinks mobile from template', () => {
    expect(routerLink[4].linkParams).toBe('/');
    expect(routerLink[5].linkParams).toBe('/cookers');
    expect(routerLink[6].linkParams).toBe('/about');
    expect(routerLink[7].linkParams).toBe('/dashboard');
  });
});
