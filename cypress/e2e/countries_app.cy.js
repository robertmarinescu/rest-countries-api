/* eslint-disable no-undef */
describe('Countries App', function() {
    it('Validate page', function() {
        cy.visit('https://rest-countries-api-ef.netlify.app/')
    })

    it('Validate text in the header', function() {
        cy.contains('Where in the world?')
    })

    it('Validate Dark Mode', function() {
        cy.contains('Dark Mode').click()
        cy.get('div.app').should('have.class', 'darkMode', )
        cy.get('div.header').should('have.class', 'darkMode')
    })

    it('Check that countries appears when page loads', function() {
        cy.contains('Afghanistan')
        cy.contains('Åland Islands')
        cy.contains('Albania')
        cy.contains('Algeria')
    })

    it('Check that the correct country appears when you type it into the input', function() {
        cy.get('input').type('Brazil')
        cy.contains('Brazil')
        cy.contains('Population: 212,559,409')
        cy.contains('Region: Americas')
        cy.contains('Capital: Brasília')
        cy.contains('Brazil').click()
    })    
    it('Click on ARG Border Country and check that the country changes', function() {
        cy.contains('ARG').click()
        cy.contains('Argentina')
    })
    it('Go back to the main page', function(){
        cy.contains('Go Back').click()
        cy.contains('Where in the world?')
    })
    it('Validate select region', function(){
        cy.get('select').select('Americas')
        cy.contains('Argentina')
    })
})