export class Location {
  latitude: number;
  longitude: number;
}

export class Polygon {
  locations: Location[] = [];
}

export class Zone {
  polygons: Polygon[] = [];
}

export class Playfield {
  playfield: Zone[] = [];
}
