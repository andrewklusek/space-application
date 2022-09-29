import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestructionRoomComponent } from './destruction-room.component';

describe('DestructionRoomComponent', () => {
  let component: DestructionRoomComponent;
  let fixture: ComponentFixture<DestructionRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestructionRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestructionRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
