describe("search elements", ()=>{
    beforeEach(()=>{
        cy.visit("http://automationpractice.com/index.php");
    })
    it("search for elements with multiple results", ()=>{
          cy.fixture("index").then((index)=>{
            cy.get(index.searchBox).type("dress");
            cy.get(index.searchButton).click();
        })
            cy.fixture("search").then((search)=>{
            cy.get(search.title).should("contain", "dress");
        })
    })    
    it("search for elements with results", ()=>{
        cy.fixture("index").then((index)=>{
        cy.get(index.searchBox).type("querty");
        cy.get(index.searchButton).click();

    })
        cy.fixture("search").then((search)=>{
        cy.get(search.alert).should("contain", "No results were found for your search");       

    })
})

})