import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoomsComponent} from './components/site/rooms/rooms.component';
import {ChatComponent} from './components/site/chat/chat.component';
import {ChatbotComponent} from './components/site/chatbot/chatbot.component';


const routes: Routes = [

  {path: 'rooms', component: RoomsComponent,  },
  {path: 'chat', component: ChatComponent,  },
  {path: 'chatbot', component: ChatbotComponent,  },

  { path: '',
    redirectTo: '/chatbot',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
