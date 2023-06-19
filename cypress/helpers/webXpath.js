class WebXpath {
 
    setXpathValue(word,type="visibleText"){
        
        let xpathString = '';

        if(type === 'name' || type === 'id' || type === 'class'){
            xpathString = `//*[contains(@${type},'${word}')]`
        }
        else{
            xpathString = `//*[contains(text(),'${word}')]`
        }

        return xpathString;
    }

    clickByXpath(element){
        let getXpathValue = this.setXpathValue(element);
        cy.xpath(getXpathValue).click().then(function () {
            cy.log("The element got clicked.");
        }, function (err) {
            cy.log("--->Error: The element couldn't get clicked due to: " + err);
        });
    }

    typeTextByXpath(element,type){
        let getXpathValue = this.setXpathValue(type,element);
        cy.xpath(getXpathValue).clear().type(word).then(function () {
            cy.log('Typing of the field with value: ' + data);
        }, function (err) {
            cy.log('--->Error: Typing of the field with value:' + data + ' was not done due to: ' + err);
        });
    }

    shouldContainTextByXpath(text) {
        let getXpathValue = this.setXpathValue(text);
        cy.xpath(getXpathValue).should('contain', text).then(function (text) {
            cy.log("The element is have: " + text);

        }, function (err) {
            cy.log("--->Error: The element dosn't have text due to: " + err);
        });

    }

}

export default WebXpath;