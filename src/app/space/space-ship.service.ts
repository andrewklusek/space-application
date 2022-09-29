import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, Observable, take, tap } from 'rxjs';
import { BomberShip } from './bomber-ship';
import { FighterShip } from './fighter-ship';
import { OrderFormValue } from './order-form-value';
import { SpaceShip } from './space-ship';
import { SpaceShipType } from './space-ship-type';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {

  static shipProductionTime = 2000;
  hangarShips = new BehaviorSubject<SpaceShip[]>([]);

  constructor() { }

  produceShips(formValue: OrderFormValue): Observable<SpaceShip> {
    const shipClass = formValue.shipType === SpaceShipType.Fighter ? FighterShip : BomberShip;
    return interval(SpaceShipService.shipProductionTime).pipe(
      map(() => new shipClass()),
      take(formValue.shipCount),
      tap((spaceShip) => this.hangarShips.next([...this.hangarShips.getValue(), spaceShip]))
  )
  }

  removeShip(shipIndex: number) {
    const ships = [...this.hangarShips.getValue()];
    ships.splice(shipIndex, 1);
    this.hangarShips.next(ships);
  }
}
