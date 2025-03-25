//your JS code here. If required.
describe('Chained Promises Test', () => {
  beforeEach(() => {
    cy.visit('/main.html'); // Ensure correct base URL
    cy.clock(); // Control the timer
  });

  it('should display the correct sequence of values', () => {
    cy.get('#output').should('contain', ''); // Initially empty

    // Trigger the first promise after 3 seconds
    cy.tick(3000);
    
    // After 1 second, it should show filtered even numbers
    cy.tick(1000);
    cy.get('#output').should('contain', '2,4');

    // After an additional 2 seconds, it should show multiplied numbers
    cy.tick(2000);
    cy.get('#output').should('contain', '4,8');
  });
});
