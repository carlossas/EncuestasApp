import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: "app-preguntas",
  templateUrl: "./preguntas.component.html",
  styleUrls: ["./preguntas.component.scss"]
})
export class PreguntasComponent implements OnInit {
  public indexActual: number = 0;

  public preguntas: Array<any> = [
    {
      id: 0,
      pregunta: "El empleado posee los conocimientos y habilidades necesarios para el puesto"
    },
    {
      id: 1,
      pregunta: "El empleado es capaz de identificar problemas"
    },
    {
      id: 2,
      pregunta: "El empleado se explica de forma clara y fácil de entender"
    },
    {
      id: 3,
      pregunta: "El empleado trabaja de forma organizada"
    },
    {
      id: 4,
      pregunta: "El empleado muestra atención y respeto ante el cliente"
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  irAgradecimiento() {
    if (this.indexActual >= 4) {
      this.router.navigate(["/agradecimiento"]);
    }else{
      this.indexActual++;
    }
  }
}
