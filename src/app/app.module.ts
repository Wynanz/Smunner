import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AnyPercentComponent } from './pages/any-percent/any-percent.component';
import { HundredPercentComponent } from './pages/hundred-percent/hundred-percent.component';
import { GtcComponent } from './pages/gtc/gtc.component';
import { BossesComponent } from './pages/bosses/bosses.component';
import { TechniquesComponent } from './pages/techniques/techniques.component';
import { ToolsComponent } from './pages/tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AnyPercentComponent,
    HundredPercentComponent,
    GtcComponent,
    BossesComponent,
    TechniquesComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
