import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BossesComponent } from './pages/bosses/bosses.component';
import { AnyPercentComponent } from './pages/any-percent/any-percent.component';
import { HundredPercentComponent } from './pages/hundred-percent/hundred-percent.component';
import { GtcComponent } from './pages/gtc/gtc.component';
import { TechniquesComponent } from './pages/techniques/techniques.component';
import { ToolsComponent } from './pages/tools/tools.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tools', component: ToolsComponent},
  {path: 'techniques', component: TechniquesComponent},
  {path: 'gtc', component: GtcComponent},
  {path: 'hundred-percent', component: HundredPercentComponent},
  {path:'any-percent', component:AnyPercentComponent},
  {path: 'bosses', component:BossesComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component:HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
