import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { declarations } from './app.declarations';
import { imports } from './app.imports';
import { providers } from './app.providers';

@NgModule({
  declarations: declarations,
  imports: imports,
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
