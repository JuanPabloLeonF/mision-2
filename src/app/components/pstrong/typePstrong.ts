import { EventEmitter } from "@angular/core";

export interface PstrongInterface {
    valueP: string;
    valueStrong: string;
    clickEvent:  EventEmitter<void>
}