import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { MedicamentosComponent } from './components/medicamentos/medicamentos.component';
import { ProductosBellezaComponent } from './components/productos-belleza/productos-belleza.component';
import { SuplementosComponent } from './components/suplementos/suplementos.component';


export const routes: Routes = [
  { path: 'belleza', component: ProductosBellezaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inicio_Sesion', component: InicioSesionComponent },
  { path: 'medicamentos', component: MedicamentosComponent },
  { path: 'suplementos', component: SuplementosComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

