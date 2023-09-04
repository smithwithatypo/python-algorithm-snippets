import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { CodeBlockComponent } from './shared/components/code-block/code-block.component';

@NgModule({
  declarations: [
    AppComponent,
    SnippetsComponent,
    CodeBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
