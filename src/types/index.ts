export type TaskType = "Temperature" | "Area" | "Mass";
 export type UnitType = "Start" | "Stop" | "Intermediate";
// export type Currency = "INR"

export type UnitPoint = {
     name: string;     
 }

export class Converts {
    constructor(public value: number, public status: string) { }
    static INR(value: number): Converts {
        return new Converts(value, "degrees");
    }

    multiply(multiplier: number): Converts {
        return new Converts(multiplier * this.value, this.status);
    }

    toString(): string {
        return `${this.value} ${this.status}`;
    }
}
