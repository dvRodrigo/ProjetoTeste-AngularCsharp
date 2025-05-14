import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';  // Importando o MatCardModule
import { MatTableModule } from '@angular/material/table';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Importando o MatTableModule

bootstrapApplication(AppComponent, {
  providers: [HttpClientModule, MatCardModule, MatTableModule, provideAnimationsAsync()]  // Registrando as dependências
}).catch(err => console.error(err));
