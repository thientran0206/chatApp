import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatFormulaireComponent } from './chat-formulaire.component';



@NgModule({
    imports: [
        CommonModule,
         FormsModule, 
    ], declarations: [  
        ChatFormulaireComponent
    ], exports: [
        ChatFormulaireComponent
    ]
})
export class ChatFormulaireModule { }