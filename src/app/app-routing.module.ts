import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'saude',
    loadChildren: () => import('./saude/saude.module').then(m => m.SaudePageModule)
  },
  {
    path: 'meus',
    loadChildren: () => import('./meus/meus.module').then(m => m.MeusPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
