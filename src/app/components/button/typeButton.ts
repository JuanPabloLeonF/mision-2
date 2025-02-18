import { EventEmitter } from "@angular/core";

export interface ButtonInterface {
    valueButton: string;
    typeButton: string;
    clickEvent:  EventEmitter<void>
}