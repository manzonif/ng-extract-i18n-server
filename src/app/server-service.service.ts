import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerServiceService {
public localizedText: string;

constructor() {

  this.localizedText = $localize`my server text`;
}

}
