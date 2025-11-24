import { Routes } from '@angular/router';
import { ConsultaComponent } from './views/consulta/consulta.component';
import { DetalhesComponent } from './views/detalhes/detalhes.component';

export const routes: Routes = [
  {
    path: 'consulta', component: ConsultaComponent
  },
  {
    path: 'detalhes', component: ConsultaComponent
  },
  {
    path: '**', component: ConsultaComponent
  }
];
