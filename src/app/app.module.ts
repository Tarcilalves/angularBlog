import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardHorizontalComponent } from './components/card-horizontal/card-horizontal.component';
import { CardVerticalComponent } from './components/card-vertical/card-vertical.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { CardSectionsComponent } from './components/card-sections/card-sections.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BannerComponent,
    CardHorizontalComponent,
    CardVerticalComponent,
    CardInfoComponent,
    FooterComponent,
    HomeComponent,
    ContentComponent,
    ExploreComponent,
    CardSectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
