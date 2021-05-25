
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { ToterListComponent } from './Componentes/toter-list/toter-list.component';
import { ToterFormComponent } from './Componentes/toter-form/toter-form.component';
import { NavegatorComponent } from './Componentes/navegator/navegator.component';
import { ToterService } from './service/toter.service'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavegatorComponent,
    ToterFormComponent,
    ToterListComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    ToterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
