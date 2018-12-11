import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { ChatElementComponent } from './chat-element.component';


@NgModule({
    imports: [
        CommonModule,
         FormsModule, 
    ], declarations: [
        ChatElementComponent
    ], exports: [
        ChatElementComponent
    ]
})
export class ChatElementModule { }