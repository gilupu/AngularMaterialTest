
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDashboardComponent } from './app-dashboard.component';

describe('AppDashboardComponent', () => {
  let fixture: ComponentFixture<AppDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      providers: [AppDashboardComponent]
    })
    .compileComponents();
    fixture = TestBed.get(AppDashboardComponent);
  }));

  it('should compile', () => {
    expect(fixture).toBeTruthy();
  });

  it('test Kuku', () => {
    expect(fixture.componentInstance.kuku()).toBeNaN();
  });
});
