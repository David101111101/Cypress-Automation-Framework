describe('Element Interaction Click', () => {

    it ('Click on an element', () => {
        cy.visit('https://demo.testim.io/flight')
        cy.get('#app > div > section.Hero__hero___1FDXn > div:nth-child(4) > button').click()
    })
})