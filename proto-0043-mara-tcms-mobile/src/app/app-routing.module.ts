import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CoreLayoutPage } from './layouts/core-layout/core-layout.page';
import { GuestLayoutPage } from './layouts/guest-layout/guest-layout.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'core',
    component: CoreLayoutPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./core/student/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'jadual-kuliah',
        loadChildren: () => import('./core/student/jadual-kuliah/jadual-kuliah.module').then( m => m.JadualKuliahPageModule)
      },
      {
        path: 'jadual-peperiksaan',
        loadChildren: () => import('./core/student/jadual-peperiksaan/jadual-peperiksaan.module').then( m => m.JadualPeperiksaanPageModule)
      },
      {
        path: 'keputusan-peperiksaan',
        loadChildren: () => import('./core/student/keputusan-peperiksaan/keputusan-peperiksaan.module').then( m => m.KeputusanPeperiksaanPageModule)
      },
      {
        path: 'latihan-industri',
        loadChildren: () => import('./core/student/latihan-industri/latihan-industri.module').then( m => m.LatihanIndustriPageModule)
      },
      {
        path: 'pendaftaran-sesi',
        loadChildren: () => import('./core/student/pendaftaran-sesi/pendaftaran-sesi.module').then( m => m.PendaftaranSesiPageModule)
      }
    ]
  },
  {
    path: 'guest',
    component: GuestLayoutPage,
    children: [
      {
        path: 'pengambilan',
        loadChildren: () => import('./core/guest/pengambilan/pengambilan.module').then( m => m.PengambilanPageModule)
      },
      {
        path: 'semakan',
        loadChildren: () => import('./core/guest/semakan/semakan.module').then( m => m.SemakanPageModule)
      },
      {
        path: 'mohon',
        loadChildren: () => import('./core/guest/mohon/mohon.module').then( m => m.MohonPageModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
