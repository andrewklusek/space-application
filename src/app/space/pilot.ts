export interface PilotAttrs {
  id?: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
}

export class Pilot {


  static defaultImageUrl = '/assets/unknown-pilot.png';

  firstName = "";
  lastName = "";
  imageUrl = "";
  id?: number;

  constructor(attrs: PilotAttrs) {
    this.id = attrs.id;
    this.firstName = attrs.firstName;
    this.lastName = attrs.lastName;
    this.imageUrl = attrs.imageUrl || Pilot.defaultImageUrl;
  }

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }

  set fullName (value: string) {
    let fullName: string[] = value.split(" ");
    this.firstName = fullName[0];
    this.lastName = fullName[1];
  }
}
