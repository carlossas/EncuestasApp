import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-empleados",
  templateUrl: "./empleados.component.html",
  styleUrls: ["./empleados.component.scss"]
})
export class EmpleadosComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  irPreguntas() {
    this.router.navigate(['/preguntas']);
  }
}
