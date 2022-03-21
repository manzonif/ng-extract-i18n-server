import { AbstractServiceService } from './abstract-service.service';
import { BrowserServiceService } from './browser-service.service';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    BrowserModule.withServerTransition({
      appId: 'repro-app'
    })
  ],
  providers: [
    {
      provide: AbstractServiceService,
      useClass: BrowserServiceService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {

}
