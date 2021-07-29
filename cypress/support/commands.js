import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command'
import '@percy/cypress'
import "cypress-audit/commands";


addMatchImageSnapshotCommand ({
    failureTreshold: 0.1,
    failureTresholdType: 'percent',
    customDiffConfig: {treshold: 0.1},
    capture: "viewport"
})

Cypress.Commands.add("setResolution", (size)=>{
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0],size[1])
    } else {
        cy.viewport(size)
    }
})