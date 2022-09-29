import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelBrowserComponent } from './intel-browser.component';

describe('IntelBrowserComponent', () => {
  let component: IntelBrowserComponent;
  let fixture: ComponentFixture<IntelBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntelBrowserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntelBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
