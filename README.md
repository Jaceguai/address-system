# Aplicação de Gerenciamento de Endereços

Esta aplicação é um sistema robusto para gerenciar endereços, construído utilizando React, Redux, Chakra UI, React Router, e Vitest. Ela fornece uma interface rica e funcionalidades para adicionar, visualizar, editar e excluir endereços.

### Pré-requisitos

Antes de iniciar, você precisa ter o Node.js e o npm (ou yarn) instalados em sua máquina. Se você não os tem instalados, pode baixá-los e instalá-los a partir do [site oficial do Node.js](https://nodejs.org/).

Ao baixar o pacote, o script (dev) vai conter a inicialização do "back-end" e do app;

## Estrutura da Aplicação

### Back-end nd simulado
- **Json Server** é utilizado para proporcionar uma ideia real da integração da aplicação com API.

### Interface do Usuário

- **Chakra UI** é utilizado para proporcionar uma interface responsiva e acessível.
- Temas **claro e escuro** são suportados com ícones de lua e sol para alternância.

### Navegação e Rotas

- **React Router** é usado para gerenciar as rotas da aplicação.
- Rotas incluem visualização de todos os endereços, adição de novo endereço e edição de endereços existentes.

### Gerenciamento de Estado

- **Redux** gerencia o estado global, incluindo operações assíncronas para adicionar, atualizar e deletar endereços.

### Formulários

- **AddressForm** para entrada de dados dos endereços com validação via **Zod**.

### Testes

- **Vitest** é usado para testes unitários e de integração, assegurando a funcionalidade dos componentes.

## Funcionalidades

- **Listar Endereços**: Mostra todos os endereços com opções para editar ou excluir.
- **Adicionar Endereço**: Permite ao usuário inserir novos endereços.
- **Editar Endereço**: Permite modificações em endereços existentes.
- **Exclusão de Endereço**: Oferece funcionalidade para remover endereços com confirmação modal.
- **Busca**: Permite ao usuário filtrar endereços listados.
- **Mudança de Tema**: Alternância entre os modos claro e escuro.

## Melhorias Futuras

1. **Autenticação e Segurança**: Implementar autenticação para acesso restrito.
2. **Melhoria na UX/UI**: Continuar aprimorando a interface com feedbacks visuais e interatividade.
3. **Expansão das Funcionalidades**: Adicionar busca e filtragem avançada, e integração com mapas.
4. **Testes**: Expandir a cobertura de testes para incluir todas as interações e componentes.


Desenvolvido por [Jaceguai Júnior](https://www.linkedin.com/in/jaceguai-junior/).

&copy; 2024 Aplicativo para teste técnico da empresa Beyond the Bytes
