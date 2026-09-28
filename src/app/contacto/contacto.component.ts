import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {
  contacto = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  };

  enviando = false;
  mensajeExito = '';
  mensajeError = '';

  constructor() {
    emailjs.init({
      publicKey: environment.emailjs.publicKey,
    });
  }

  enviarMensaje(formulario: HTMLFormElement): void {
    console.log(formulario);

    const data = new FormData(formulario);

    console.log(data.get('user_name'));
    console.log(data.get('user_email'));
    console.log(data.get('subject'));
    console.log(data.get('message'));
    this.mensajeExito = '';
    this.mensajeError = '';

    if (!formulario.checkValidity()) {
      formulario.classList.add('was-validated');
      return;
    }

    if (this.enviando) {
      return;
    }

    this.enviando = true;

    emailjs
      .sendForm(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        formulario,
      )
      .then(() => {
        this.mensajeExito =
          '¡Mensaje enviado correctamente! Me pondré en contacto contigo pronto.';

        this.contacto = {
          nombre: '',
          email: '',
          asunto: '',
          mensaje: '',
        };

        formulario.reset();
        formulario.classList.remove('was-validated');
      })
      .catch((error) => {
        console.error('EMAILJS ERROR:', error);

        this.mensajeError = 'No fue posible enviar el mensaje.';
      })
      .finally(() => {
        this.enviando = false;
      });
  }
}
