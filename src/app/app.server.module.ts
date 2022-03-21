import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AbstractServiceService } from './abstract-service.service';
import { ServerServiceService } from './server-service.service';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'repro-app'
    }),
    AppModule,
    ServerModule,
    ServerTransferStateModule,
  ],
  providers: [
    {
      provide: AbstractServiceService,
      useClass: ServerServiceService
    }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
