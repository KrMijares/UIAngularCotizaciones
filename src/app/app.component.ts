import {Component, OnInit} from '@angular/core';
import {ConsultaMonedasService} from './servicios/consulta/consulta-monedas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cotizaciones Prueba';
  valorDolar = null;
  valorEuro = null;
  valorReal = null;
  constructor(
    public consulta: ConsultaMonedasService
  ) {
    setInterval(() => this.consultarDolar(), 5000);
    setInterval(() => this.consultarEuro(), 5000);
    setInterval(() => this.consultarReal(), 5000);
  }
  ngOnInit() {
    this.consultarDolar();
    this.consultarEuro();
    this.consultarReal();
  }

  consultarDolar() {
    this.consulta.consultarDolar().then(data => {
      this.valorDolar = data['precio'];
    });
  }

  consultarEuro() {
    this.consulta.consultarEuro().then(data => {
      this.valorEuro = data['precio'];
    });
  }

  consultarReal() {
    this.consulta.consultarReal().then(data => {
      this.valorReal = data['precio'];
    });
  }
}
