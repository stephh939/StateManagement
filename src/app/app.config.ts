import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideHttpClient} from "@angular/common/http";
import { provideStore } from '@ngrx/store';
import { routes } from "./app-routing.module";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideStore()]
};
