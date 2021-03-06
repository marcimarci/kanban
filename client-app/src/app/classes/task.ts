import { User } from './user';
import { Team } from './team';

export enum Progress {
    BACKLOG, IN_PROGRESS, TEST, BLOCKED, DONE
}

export class Task {

    public id: number;
    public description: String;
    public progress: Progress = Progress.IN_PROGRESS;
    public teamID: number;
    public userID: number;
    public overAll: String;

    public constructor(
        id?: number,
        description?: String, teamID?: number/*, team?: Team*/
    ) {
        this.id = id;
        this.description = description;
        this.teamID = teamID;
        this.progress = Progress.IN_PROGRESS;
        this.overAll = this.toString();
    }

    public getId(): number {
        return this.id;
    }

    public changeProgress(prog: Progress): void {
        this.progress = prog;
    }

    public toString(): string {
        return this.description + ' ............. ' + this.progress.toString();
    }

    public getProgress(): Progress {
        return this.progress;
    }

}

