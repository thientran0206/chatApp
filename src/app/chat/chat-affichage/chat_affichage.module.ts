import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatAffichageComponent } from './chat-affichage.component';
import { ChatElementModule } from '../chat-element/chat_element.module';


@NgModule({
    imports: [
        CommonModule,
         FormsModule,
         ChatElementModule 
    ], declarations: [
        
        ChatAffichageComponent
    ], exports: [
        ChatAffichageComponent
    ]
})
export class ChatAffichageModule { }