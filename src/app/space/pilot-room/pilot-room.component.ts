import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pilot } from '../pilot';
import { PilotService } from '../pilot.service';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {

  @Output()
  selected = new EventEmitter<Pilot | null>();

  pilots: Pilot[] = [];
  selectedPilot: Pilot | null = null;

  constructor(private pilotService: PilotService) { }

  ngOnInit(): void {
    // this.pilots.push(new Pilot("Andrzej Testowy", "/assets/adama.png"));
    // this.pilots.push(new Pilot("Kasia Testowa", "/assets/valerii.png"));
    this.pilotService.getPilots().subscribe({
      next: (pilots) => this.pilots = pilots,
      error: () => alert('Nie pobrano pilotów')
    })
  }

  select(pilot: Pilot | null) {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }

  pilotReturn(pilot: Pilot) {
    this.pilots.push(pilot);
  }

  pilotLeave(pilot: Pilot): void {
    const index = this.pilots.indexOf(pilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }

}
