///<reference types="cypress" />
const name='I'
const lName='Trofimov'
const gender='Male'
const date='1995-03-03'
const email='email@email.com'
const invalidName='123'
const invalidLName='123'
const invalidDate='2030-12-03'
const invalidEmail='emailemail.com'
import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
import BasePage from '../BasePage/BasePage'

Given('I open home page',()=>{
    BasePage.openHomePage()
   
    cy.get('h1').should('contain','Registration Form JS')
})
When('I fill form with valid data',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    cy.get('#name').should('be.visible').clear().type(name)
    cy.get('#lname').should('be.visible').clear().type(lName)
    cy.get('[for="radio1"]').should('not.be.checked')
    cy.get('[for="radio2"]').should('not.be.checked')
    cy.contains(gender).click()
    cy.get('input[type=radio]').should('be.checked').and('have.value', gender)
    cy.get('#date').type(date)
    cy.get('#email').type(email)
    
})
Then('I click send',()=>{
    cy.get('#send').click()
    
    
})
Then('I close popup',()=>{
    cy.get('#myPopup').should('be.visible').and('contain','New user added!')
    cy.get('.blocker').should('be.visible')
    cy.get('#blocker').click()
    cy.get('#myPopup').should('not.be.visible')
    cy.get('.blocker').should('not.be.visible')
})
When('I check table for a new record',()=>{
    cy.get('#table').should('be.visible')
    cy.get('tbody > :nth-child(2)').as('newRecord')
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', name)
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('contain', lName)
    cy.get('tbody > :nth-child(2) > :nth-child(4)').should('contain', gender)
    cy.get('tbody > :nth-child(2) > :nth-child(5)').should('contain', date)
    cy.get('tbody > :nth-child(2) > :nth-child(7)').should('contain', email)
   
    })
When('I check table data',()=>{
        cy.get('#table').should('be.visible')
        cy.get('tbody > :nth-child(2)').as('newRecord')
        cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', name)
        cy.get('tbody > :nth-child(2) > :nth-child(3)').should('contain', lName)
        cy.get('tbody > :nth-child(2) > :nth-child(4)').should('contain', "Prefer not to say")
        cy.get('tbody > :nth-child(2) > :nth-child(5)').should('contain', date)
        cy.get('tbody > :nth-child(2) > :nth-child(7)').should('contain', email)
       
        })
Then('I delete new record',()=>{
    const stub = cy.stub()
    cy.on('window:confirm', stub)
    cy.get(':nth-child(2) > :nth-child(8) > #delete').should('be.visible').click().then(()=>{
        expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete this row?')
    })
    cy.get('#table').should('not.contain', name)
    .should('not.contain', lName)
    .should('not.contain', gender)
    .should('not.contain', date)
    .should('not.contain', email)
})

When('I fill valid name',()=>{
    cy.get('#name').should('be.visible').clear().type(name)
})
When('I fill valid last name',()=>{
    cy.get('#lname').should('be.visible').clear().type(lName)
})
When('I fill valid date',()=>{
    cy.get('#date').should('be.visible').clear().type(date)
})
When('I fill valid email',()=>{
    cy.get('#email').should('be.visible').clear().type(email)
})
When('I fill invalid name',()=>{
    cy.get('#name').should('be.visible').clear().type(invalidName)
})
When('I fill invalid last name',()=>{
    cy.get('#lname').should('be.visible').clear().type(invalidLName)
})
When('I fill invalid date',()=>{
    cy.get('#date').should('be.visible').clear().type(invalidDate)
})
When('I fill invalid email',()=>{
    cy.get('#email').should('be.visible').clear().type(invalidEmail)
})

When('I click send and see {string} alert',(alert)=>{
    const stub = cy.stub()
    cy.on('window:alert', stub)
    cy.get('#send').click().then(()=>{
        expect(stub.getCall(0)).to.be.calledWith(alert)
    })
})
