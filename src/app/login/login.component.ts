import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  // Inyecta el servicio Router en el constructor
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Método para manejar el inicio de sesión
  signIn() {
    // Aquí puedes agregar lógica de autenticación si es necesario
    // Luego, redirige a la página de inicio
    this.router.navigateByUrl('/landing');
  }
}
