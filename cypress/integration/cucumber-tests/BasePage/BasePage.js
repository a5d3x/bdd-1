const URL='./index.html'
export default class BasePage{
    static pause(ms){
        cy.wait(ms)
    }
    static setMobileViewport(){
        cy.viewport('iphone-x')
    }

    static setTabletViewport(){
        cy.viewport('ipad-2')
    }

    static setDesktopViewport(){
        cy.viewport('macbook-13')
    }

    static setLargeDesktopViewport(){
        cy.viewport(1920,1080)
    }
    static openHomePage(){
        cy.visit(URL)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    }
    
}
