import {Note} from "./note";

export class User {
    id: number;
    birthDate: Date;
    name: string;
    bio: string;

    notes: Note[] = [];
}
