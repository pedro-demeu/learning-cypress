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

    cy.contains('button[type="submit"]', 'Enviar')
      .click();

    cy.get('span[class="success"]')
      .should('be.visible');
            
  });

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
    cy.get('#email')
      .type('pdemeu')
      .should('have.value', 'pdemeu');

    cy.contains('button[type="submit"]', 'Enviar')
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

    cy.contains('button[type="submit"]', 'Enviar')
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
    
  });

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
    cy.contains('button[type="submit"]', 'Enviar')
      .click();

    cy.get('span[class="error"]')
      .should('be.visible');
  });

  it('envia o formuário com sucesso usando um comando customizado', function(){
    cy.fillMandatoryFieldsAndSubmit();
  });

  it('seleciona um produto (YouTube) por seu texto', function(){
    cy.get('#product')
    .select('YouTube')
    .should('have.value', 'youtube');
  });

  it('marca o tipo de atendimento "Feedback"' , function(){
    cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('be.checked');
  });

  it('marca cada tipo de atendimento', function(){
    cy.get('input[type="radio"]')
      .should('have.length', 3)
      .each(function (el) {
          cy.wrap(el).check()
      })
  });

  it('marca ambos checkboxes, depois desmarca o último', function(){
    cy.get('input[type="checkbox"]')
      .should('have.length', 2)
      .check()
      .last()
      .uncheck()

  });

  it('seleciona um arquivo da pasta fixtures', function(){
    cy.get('#file-upload')
    .selectFile('cypress/fixtures/example.json')
    .should(($el) => expect($el[0].files[0].name).to.eq('example.json'))
  });
})
