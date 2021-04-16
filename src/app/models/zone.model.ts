export class Location {
  latitude: number;
  longitude: number;
}

export class Point {
  location: Location;
}

export class Zone {
  playfield: Point[] = [];
}
