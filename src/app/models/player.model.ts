import { LoadChildren } from "@angular/router";
import { Loot } from "./loot.model";

export class Player {
    _id: String;
    name: String;
    role: string;
	arrested: Boolean;
	location: Location;
    loot: [Loot];
}
