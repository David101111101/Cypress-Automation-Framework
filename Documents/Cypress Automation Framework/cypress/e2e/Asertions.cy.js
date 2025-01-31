//const { after } = require("mocha")

describe('Assertions', () => {

    beforeEach(() => {
        cy.visit('/flight')
    })



    it('Assertions', () => {
        
        cy.url().should('include', 'testim')
        cy.get('#app > div > section.Hero__hero___1FDXn > div:nth-child(3) > div > div:nth-child(4) > div > input').should('be.visible').should('have.attr','value','Children (0-7)')
    })
    
    it('Assertion 2', () => {
        
        cy.get('#app > div > section.Hero__hero___1FDXn > div:nth-child(1) > h1', { timeout: 10000 }).should('be.visible').and('have.text', 'Space & Beyond');
    })

    it('Assertion 3', () => {
       
        cy.get('.Hero__headline-2___1awT4', { timeout: 10000 }).should('be.visible').then((element) => {
            cy.wrap(element).invoke('text').should('equal', 'Customize your dream journey to space');
        });
        //debugger
    });

    after(() => {
        cy.log('Test is done')
    })
    
})
