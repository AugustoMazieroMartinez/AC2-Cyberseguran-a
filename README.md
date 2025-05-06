# secure-messaging-app/README.md

# Secure Messaging App

## Overview
This project is a secure messaging application that allows users to exchange messages securely. It implements message encryption and CSRF protection to ensure the confidentiality and integrity of the messages exchanged between users.

## Features
- User authentication
- Secure message sending and receiving
- Message encryption using AES/RSA
- CSRF protection for form submissions

## Project Structure
```
secure-messaging-app/
├── src/
│   ├── app.js                  # Entry point of the application
│   ├── controllers/
│   │   └── messageController.js # Handles message sending and receiving
│   ├── routes/
│   │   └── index.js            # Sets up application routes
│   ├── utils/
│   │   └── encryption.js        # Implements message encryption and decryption
│   ├── views/
│   │   ├── chat.ejs            # Front-end interface for messaging
│   │   └── login.ejs           # User login interface
│   └── types/
│       └── index.d.ts          # Type definitions for TypeScript
├── package.json                 # npm configuration file
├── tsconfig.json                # TypeScript configuration file
└── README.md                    # Project documentation
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/secure-messaging-app.git
   cd secure-messaging-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   node src/app.js
   ```

4. Access the application at `http://localhost:3000`.

## Usage
- Users must log in to access the chat functionality.
- Once logged in, users can send and receive messages securely.
- Messages are encrypted before being sent and decrypted upon receipt.

## Security Features
- **Message Encryption**: Utilizes AES/RSA encryption to secure messages.
- **CSRF Protection**: Implements CSRF tokens to protect against cross-site request forgery attacks.

## A seção anterior foi gerada automaticamente.

# Questão 2: Teoria de Criptografia 
## Explique as principais diferenças entre criptografia simétrica e criptografia assimétrica. Discuta os cenários onde cada tipo de criptografia seria mais adequado, com exemplos práticos.

### Criptografia Simétrica usa a mesma chave para criptografar e descriptografar os dados. É rápida, mas exige que remetente e destinatário compartilhem a chave de forma segura.
Exemplo: criptografar arquivos em um HD com AES.

### Criptografia Assimétrica usa duas chaves: uma pública para criptografar e uma privada para descriptografar. É mais segura para comunicação à distância, mas mais lenta.
Exemplo: enviar um e-mail seguro com PGP ou negociar uma chave em HTTPS (SSL/TLS).

### Cenários adequados:

Simétrica: ideal para grandes volumes de dados e ambientes controlados (ex: backups criptografados).

Assimétrica: ideal para troca segura de informações em redes públicas (ex: autenticação e troca de chaves em conexões seguras).

# Questão 3: Mitigação de Ataques

## 1. SQL Injection (Injeção de SQL)
   O que é:
      O invasor injeta comandos SQL maliciosos em campos de entrada (como login) para manipular o banco de dados.
   Mitigação:
      Use queries parametrizadas (prepared statements).
      Valide e sanitize entradas do usuário.
      Restrinja permissões do banco de dados.

## 2. Cross-Site Scripting (XSS)
   O que é:
      O atacante injeta scripts maliciosos em páginas que são exibidas para outros usuários, podendo roubar cookies ou redirecionar sessões.
   Mitigação:
      Escape corretamente o conteúdo antes de exibi-lo em HTML.
      Use Content Security Policy (CSP).
      Sanitize entradas para remover scripts.

## 3. Cross-Site Request Forgery (CSRF)
   O que é:
      O usuário autenticado é induzido a executar ações maliciosas em um site (como transferir dinheiro) sem perceber.
   Mitigação:
      Use tokens CSRF únicos por sessão/formulário.
      Verifique origem/referer das requisições.
      Exija autenticação extra para ações críticas.

