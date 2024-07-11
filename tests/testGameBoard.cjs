const { Builder, By, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const path = require('path');

const geckoDriverPath = path.join('C:/Users/Bianca/Downloads/Selenium_setUp/geckodriver-v0.34.0-win32/geckodriver.exe');

async function testTicTacToe() {
    let serviceBuilder = new firefox.ServiceBuilder(geckoDriverPath);

  
    let options = new firefox.Options();
    let driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .setFirefoxService(serviceBuilder)
        .build();

    try {
        //await driver.navigate().to('http://localhost:3002');
        await driver.get('http://localhost:3002');
        await driver.manage().window().maximize();
      
      

    
        await driver.findElement(By.css('.btn-warning')).click();

        // click a cell by index
        async function clickCell(index) {
            let cell = await driver.findElement(By.css(`.col-4:nth-child(${index + 1})`));
            await cell.click();
        }

      
        await clickCell(0); // X moves
        await driver.sleep(1000); // Wait for the computer move
        await clickCell(3); 
        await driver.sleep(1000); 
        await clickCell(6); 
        await driver.sleep(1000); 
        await clickCell(8); 
        await driver.sleep(1000); 
        await clickCell(4); 
        await driver.sleep(1000); 
        await clickCell(1); 
        await driver.sleep(1000); 
        await clickCell(2); 
        await driver.sleep(1000); 
        await clickCell(1); 
        await driver.sleep(1000); 
        await clickCell(1); 
        await driver.sleep(1000); 
        await clickCell(7); 
        await driver.sleep(1000); 
        await clickCell(5); 
        await driver.sleep(1000); 
        await clickCell(8); 
        await driver.sleep(1000); 





        // wait for the result message to appear
        let resultMessage = await driver.wait(until.elementLocated(By.css('.container')), 5000);
        let text = await resultMessage.getText();

        
        console.log(`Game result: ${text}`);
    } finally {
        
        await driver.quit();
    }
}

testTicTacToe();
