🧾 README.md — Formulário de Cadastro (Angular + Material)

📋 Descrição

Este projeto é um formulário de cadastro de clientes, desenvolvido com Angular, TypeScript e Angular Material, aplicando boas práticas de layout e componentização.
O objetivo é demonstrar como criar interfaces modernas, responsivas e integradas a serviços de notificação e navegação usando as ferramentas do Angular.

🧠 Principais Tecnologias:

🅰️ Angular 17+

💅 Angular Material (MatCard, MatFormField, MatInput, MatSnackBar)

📐 Angular Flex Layout (para responsividade)

⚙️ TypeScript

🧪 Karma + Jasmine (testes unitários)

🐳 Docker (opcional para execução isolada)

🖥️ Preview
A interface usa componentes mat-card e mat-form-field, garantindo um design moderno e consistente com o Material Design.

📸 Exemplo da interface do formulário:

A interface usa componentes mat-card e mat-form-field, garantindo um design moderno e consistente com o Material Design.

📂 Estrutura do módulo
/src/app/cadastro/
│
├── cadastro.html    

# Template do formulário

├── cadastro.ts    

# Lógica do componente Angular

├── cadastro.spec.ts 

# Testes unitários

🧱 Funcionalidades

✅ Campo de nome com validação básica

✅ Layout responsivo com Flex Layout (fxLayout, fxFlex)

✅ Estrutura visual com Angular Material

✅ Integração com Router (navigate)

✅ Feedback com MatSnackBar

✅ Base pronta para adicionar novos campos (e-mail, telefone, etc.)


Exemplo de Template:

<mat-card>
  <mat-card-header>
    <mat-card-title>Dados Pessoais</mat-card-title>
  </mat-card-header>

  <mat-card-content>
    <mat-form-field class="full-width">
      <mat-label>Nome: *</mat-label>
      <input type="text" matInput placeholder="Ex: Leonardo Silva" name="nome" ngModel />
    </mat-form-field>
  </mat-card-content>
</mat-card>

Como executar localmente
1️⃣ Instale as dependências
npm install


2️⃣ Rode o servidor de desenvolvimento
ng serve

Acesse o app em:
👉 https://formulario-de-cadastro-kappa-drab.vercel.app/


👨‍💻 Autor

Leonardo Silva

💼 Desenvolvedor Front-End

📧 leonardoo.silvaa2012@gmail.com


