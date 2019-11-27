import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StatusService } from './status.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StatusService],
      declarations: [AppComponent]
    }).compileComponents();


  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CarShopSPA'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('CarShopSPA');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('CarShopSPA app is running!');
  // });
});
