import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent, TemplateBindingComponent],
  template: `
    <html lang="pt-br">
    <head>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
      <title>{{title}}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    </head>
  <body>
    <h1>Simulação</h1>
    <h2>Isso não é uma simulação... Salvem-se quem puder</h2>
    app-new-component

    <br>
    <app-template-binding></app-template-binding>

  </body>
  </html>
  `,
  styles: `
    body{
      font-family: lato, 'lato black', helvetica
    }
    .lato-thin {
      font-family: "Lato", sans-serif;
      font-weight: 100;
      font-style: normal;
    }

    .lato-light {
      font-family: "Lato", sans-serif;
      font-weight: 300;
      font-style: normal;
    }

    .lato-regular {
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-style: normal;
    }

    .lato-bold {
      font-family: "Lato", sans-serif;
      font-weight: 700;
      font-style: normal;
    }

    .lato-black {
      font-family: "Lato", sans-serif;
      font-weight: 900;
      font-style: normal;
    }

    .lato-thin-italic {
      font-family: "Lato", sans-serif;
      font-weight: 100;
      font-style: italic;
    }

    .lato-light-italic {
      font-family: "Lato", sans-serif;
      font-weight: 300;
      font-style: italic;
    }

    .lato-regular-italic {
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-style: italic;
    }

    .lato-bold-italic {
      font-family: "Lato", sans-serif;
      font-weight: 700;
      font-style: italic;
    }

    .lato-black-italic {
      font-family: "Lato", sans-serif;
      font-weight: 900;
      font-style: italic;
    }
  `
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Home';
}
