class WebXpath {
 
    setXpathValue(type,element){
        
        let xpathString = '';

        if(type === 'name'){
            xpathString = `//*[contains(@name,'${element}')]`
        }
        else if (type === 'id'){
            xpathString = `//*[contains(@id,'${element}')]`
        }
        else if (type === 'class'){
            xpathString = `//*[contains(@class,'${element}')]`
        }

        else if(type === 'visibleText'){
            xpathString = `//*[contains(text(),'${element}')]`
        }

        return xpathString;
    }

    clickByXpath(type,element){
        let getXpathValue = this.setXpathValue(type,element);
        cy.xpath(getXpathValue).click().then(function () {
            cy.log("The element got clicked.");
        }, function (err) {
            cy.log("--->Error: The element couldn't get clicked due to: " + err);
        });
    }

    typeTextByXpath(type,element,data){
        let getXpathValue = this.setXpathValue(type,element);
        cy.xpath(getXpathValue).clear().type(data).then(function () {
            cy.log('Typing of the field with value: ' + data);
        }, function (err) {
            cy.log('--->Error: Typing of the field with value:' + data + ' was not done due to: ' + err);
        });
    }

}

export default WebXpath;