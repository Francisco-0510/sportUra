import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () =>import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () =>import('./auth/login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: '',
    loadChildren: () => import('./auth/splash/splash.module').then(m => m.SplashPageModule),
},
  /* {
    path: 'splash',
    loadChildren: () =>
      import('./auth/splash/splash.module').then(m => m.SplashPageModule),
  }, */
  {
    path: 'home',
    loadChildren: () =>import('./client/home/home.module').then(m => m.HomePageModule),
  },
  {
    path: 'lista-ctividades',
    loadChildren: () => import('./client/actividdes/lista-ctividades/lista-ctividades.module').then( m => m.ListaCtividadesPageModule)
  },
  {
    path: 'detale-actividad',
    loadChildren: () => import('./client/actividades/detale-actividad/detale-actividad.module').then( m => m.DetaleActividadPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
