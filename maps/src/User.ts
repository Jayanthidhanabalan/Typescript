import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "blue";

  constructor() {
    this.name = faker.name.firstName();
    console.log(this.name);
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
