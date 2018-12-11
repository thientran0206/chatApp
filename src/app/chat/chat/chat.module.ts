import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat.component'; 
import { ChatAffichageModule } from '../chat-affichage/chat_affichage.module';
import { ChatElementModule } from '../chat-element/chat_element.module';
import { ChatFormulaireModule } from '../chat-formulaire/chat_formulaire.module';
 
@NgModule({   
	imports: [ 
		CommonModule,
		FormsModule,
		HttpClientModule,
		ChatAffichageModule,
		ChatElementModule,
		ChatFormulaireModule
	],
    declarations: [     
		   ChatComponent,
	   ],
    providers: [ ],
   	exports: [ 
  		ChatComponent   
  	] 
  }) 
  export class ChatModule { } 