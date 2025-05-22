describe('Local Storage', () => {
    it('creates a task', () => {
        cy.visit("https://todo-cypress-iota.vercel.app/")
        cy.get("#title").type("Test Title")
        cy.get("#description").type("Test Description")

        cy.contains("Create").click()
        cy.contains("Test Title")
        cy.reload()
        cy.contains("Test Title").then(() => {
            expect(localStorage.getItem("Test Title")).to.not.be.null
        })


        cy.contains("Remove")
        .click()
        .then(() => {
            expect(localStorage.getItem("Test Title")).to.be.null
        })

        cy.clearLocalStorage("Test Title").should(() => {
            expect(localStorage.getItem("Test Title")).to.be.null

        })

    })
})