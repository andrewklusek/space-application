import { Pilot } from "./pilot";
import { SpaceShip } from "./space-ship";

export class FighterShip extends SpaceShip{

  constructor(pilot?: Pilot) {
    super('Viper', '/assets/viper.png', pilot);
  }
}
