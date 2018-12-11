import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat/chat.module';
import { ChatAffichageComponent } from './chat/chat-affichage/chat-affichage.component';
import { ChatElementComponent } from './chat/chat-element/chat-element.component';
import { ChatAffichageModule } from './chat/chat-affichage/chat_affichage.module';
import { ChatElementModule } from './chat/chat-element/chat_element.module';
import { ChatFormulaireComponent } from './chat/chat-formulaire/chat-formulaire.component';
import { ChatFormulaireModule } from './chat/chat-formulaire/chat_formulaire.module';
import { ChatService } from './chat/services/chat.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ChatModule,
    
    AppRoutingModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
