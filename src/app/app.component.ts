import { Component } from '@angular/core';
import { AbstractServiceService } from './abstract-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'repro-app';
  serviceText: string;

  constructor(
    private abstractServiceService: AbstractServiceService
  ) {
    this.serviceText = abstractServiceService.localizedText;
  }
}
