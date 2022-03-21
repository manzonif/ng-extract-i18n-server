import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractServiceService {
public abstract localizedText: string;
constructor() {

}

}
