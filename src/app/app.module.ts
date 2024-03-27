import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileBarComponent } from './components/profile-bar/profile-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DisplayBarComponent } from './components/display-bar/display-bar.component';

import { PavilionsComponent } from './pages/pavilions/pavilions.component';
import { SectorsComponent } from './pages/sectors/sectors.component';
import { CardComponent } from './components/card/card.component';
import { StandsComponent } from './pages/stands/stands.component';
import { MerchandiseComponent } from './pages/merchandise/merchandise.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddNewButtonComponent } from './components/add-new-button/add-new-button.component';
import { SectorItemComponent } from './pages/sector-item/sector-item.component';
import { PavilionItemComponent } from './pages/pavilion-item/pavilion-item.component';
import { StandItemComponent } from './pages/stand-item/stand-item.component';
import { MerchandiseItemComponent } from './pages/merchandise-item/merchandise-item.component';



const appRoutes: Routes = [
  { path: '', component: PavilionsComponent },
  { path: 'pavilions', component: PavilionsComponent },
  { path: 'sectors', component: SectorsComponent },
  { path: 'stands', component: StandsComponent },
  { path: 'merchandise', component: MerchandiseComponent },
  { path: 'not-found', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    ProfileBarComponent,
    DisplayBarComponent,
    PavilionsComponent,
    SectorsComponent,
    CardComponent,
    StandsComponent,
    MerchandiseComponent,
    NotFoundComponent,
    AddNewButtonComponent,
    SectorItemComponent,
    PavilionItemComponent,
    StandItemComponent,
    MerchandiseItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
