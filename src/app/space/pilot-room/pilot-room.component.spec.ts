import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotRoomComponent } from './pilot-room.component';

describe('PilotRoomComponent', () => {
  let component: PilotRoomComponent;
  let fixture: ComponentFixture<PilotRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
