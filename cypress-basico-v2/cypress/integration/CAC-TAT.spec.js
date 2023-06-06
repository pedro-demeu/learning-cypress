/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

  this.beforeEach(() => {
    cy.visit('./src/index.html');
  });

  it('verifica o título da aplicação', function() {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT');
  });

  it('preencher os campos obrigatórios e enviar o formulário', function() {
    cy.get('#firstName')
      .type('Fulano')
      .should('have.value', 'Fulano');

    cy.get('#lastName')
      .type('de Tal')
      .should('have.value', 'de Tal');
    
    cy.get('#email')
      .type('pdemeu@gmail.com')
      .should('have.value', 'pdemeu@gmail.com');

    cy.get('#open-text-area')
      .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl sit amet aliquam luctus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec auctor, nisl sit amet aliquam luctus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl.', {
        delay: 1
      })
      .should('have.value', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl sit amet aliquam luctus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec auctor, nisl sit amet aliquam luctus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl.');

    cy.get('button[type="submit"]')
      .click();

    cy.get('span[class="success"]')
      .should('be.visible');
            
  });

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    cy.get('#email')
      .type('pdemeu')
      .should('have.value', 'pdemeu');

    cy.get('button[type="submit"]')
      .click();

    cy.get('span[class="error"]')
      .should('be.visible');
  });

  it('campo telefone deve manter o valor vazio, caso digitado algum valor não númerico', function() {
    cy.get('#phone')
      .type('abc')
      .should('have.value', '');
  });

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido durante o envio do formulário', function (){
    cy.get('#phone-checkbox')
      .click();

    cy.get('.phone-label-span')
      .should('be.visible');

    cy.get('button[type="submit"]')
      .click();

    cy.get('span[class="error"]')
      .should('be.visible');
  });

  it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
    cy.get('#firstName')
      .type('Fulano')
      .should('have.value', 'Fulano')
      .clear()
      .should('have.value', '');

    cy.get('#lastName')
      .type('de Tal')
      .should('have.value', 'de Tal')
      .clear()
      .should('have.value', '');
    
    cy.get('#email')
      .type('pdemeu@gmail.com')
      .should('have.value', 'pdemeu@gmail.com')
      .clear()
      .should('have.value', '');

    cy.get('#phone')
      .type('11999999999')
      .should('have.value', '11999999999')
      .clear()
      .should('have.value', '');
    
  })
})
