describe('Awaiting for IU Elements', () => {
	beforeEach(() => {
		cy.visit('https://platzi.com')
	})
	it('For an specific timeout', () => {
		//Try to only use this one as last resort
		//cy.wait(2000)
	})

	it('awaits for an element', () => {
		//default awaiting time is 4Secs
		cy.get('#schools-list > ul > :nth-child(1) > a')
	})

	it('awaits for an element', () => {
        //despite both having the same time , it is a timeout if it finds it before it will continue advancing it will not wait 6 seconds always
		cy.get('#schools-list > ul > :nth-child(1) > a', { timeout: 2000 })
	})

	it('Espera por un elemento y hacer una asersion', () => {
	
		// esto  modifica el timeout the todas los comandos  incluyendo el should
		cy.get('#schools-list > ul > :nth-child(1) > a', { timeout: 1000 }).should('be.visible')
		
		// https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Applying-Timeouts
	})
})

describe('Esperando por elementos', () => {
	 

	it('Deshabilitando el retry', () => {
		// lo deshabilitamos
        cy.visit('https://demoqa.com')
		cy.get('.banner-image', { timeout: 5000 })
		cy.get('.banner-image', { timeout: 0 })
	})
})