import { Sprites } from "./photo.type";
import { Types } from "./types.type";

export default interface Pokemon {
    id: number,
    name: string,
    weight: number,
    types:Types[],
    sprites: Sprites
}
