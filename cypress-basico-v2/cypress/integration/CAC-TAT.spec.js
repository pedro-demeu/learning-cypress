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
      .type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl sit amet aliquam luctus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec auctor, nisl sit amet aliquam luctus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl.')
      .should('have.value', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl sit amet aliquam luctus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl. Donec auctor, nisl sit amet aliquam luctus, nunc nunc aliquet nunc, vitae aliquam nisl nunc vitae nisl.');

    cy.get('button[type="submit"]')
      .click();

    cy.get('span[class="success"]')
      .should('be.visible');
            
  });
})
