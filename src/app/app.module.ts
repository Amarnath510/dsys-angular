import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StyleGuideComponent } from './components/style-guide/style-guide.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { InsuranceCardsComponent } from './components/insurance-cards/insurance-cards.component';
import { InsuranceCardComponent } from './components/insurance-card/insurance-card.component';
import { SelectComponent } from './components/select/select.component';
import { TitleComponent } from './components/title/title.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StyleGuideComponent,
    ButtonsComponent,
    CardsComponent,
    ButtonComponent,
    CardComponent,
    InsuranceCardsComponent,
    InsuranceCardComponent,
    SelectComponent,
    TitleComponent,
    InputsComponent,
    InputComponent
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
