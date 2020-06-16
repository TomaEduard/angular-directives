import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlisht.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';
import { TestDirectiveDirective } from './test-directive/test-directive.directive';

@NgModule({
   declarations: [
      AppComponent,
      BasicHighlightDirective,
      BetterHighlightDirective,
      UnlessDirective,
      TestDirectiveDirective
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
