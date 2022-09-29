import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotFormComponent } from './pilot-form.component';

describe('PilotFormComponent', () => {
  let component: PilotFormComponent;
  let fixture: ComponentFixture<PilotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
