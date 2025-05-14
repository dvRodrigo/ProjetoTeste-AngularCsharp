import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [MatTableModule, MatPaginatorModule,MatCardModule,HttpClientModule,RouterOutlet]
})

export class AppComponent {
  pessoas: any[] = [];
  displayedColumns: string[] = ['nome', 'idade', 'municipio', 'estado'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPessoas().subscribe(data => {
      this.pessoas = data;
    });
  }

  getPessoas(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5277/api/pessoas'); // Endereço da API
  }
}
