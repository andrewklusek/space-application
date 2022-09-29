import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineersRoomComponent } from './engineers-room.component';

describe('EngineersRoomComponent', () => {
  let component: EngineersRoomComponent;
  let fixture: ComponentFixture<EngineersRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineersRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineersRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
