import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserServiceService {
public localizedText: string;
constructor() {
  this.localizedText = $localize`my browser text`;
}

}
