import { Injectable } from '@angular/core';
import Pessoa from './Pessoa';

@Injectable()
export class AppData {
    pessoa: Pessoa = new Pessoa()
}