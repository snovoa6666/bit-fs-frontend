import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { ProductosComponent } from './components/productos/productos.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'inicio_Sesion', component: InicioSesionComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

