import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-agradecimiento",
  templateUrl: "./agradecimiento.component.html",
  styleUrls: ["./agradecimiento.component.scss"]
})
export class AgradecimientoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  
  reiniciar() {
    this.router.navigate(['/inicio']);
  }
}
