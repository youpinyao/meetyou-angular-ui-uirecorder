const fs = require('fs');
const path = require('path');
const chai = require("chai");
const should = chai.should();
const JWebDriver = require('jwebdriver');
chai.use(JWebDriver.chaiSupportChainPromise);
const resemble = require('resemblejs-node');
resemble.outputSettings({
    errorType: 'flatDifferenceIntensity'
});

const rootPath = getRootPath();

module.exports = function(){

    let driver, testVars;

    before(function(){
        let self = this;
        driver = self.driver;
        testVars = self.testVars;
    });

    it('url: http://0.0.0.0:8686/#!/components/data-entry/input-number', async function(){
        await driver.url(_(`http://0.0.0.0:8686/#!/components/data-entry/input-number`));
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('dblClick: div:nth-child(1) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(2), 14, 7, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(1) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(2)', 30000)
               .sleep(300).mouseMove(14, 7).click(0).click(0);
    });

    it('dblClick: div:nth-child(1) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(2), 14, 7, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(1) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(2)', 30000)
               .sleep(300).mouseMove(14, 7).click(0).click(0);
    });

    it('dblClick: div:nth-child(1) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(2), 14, 7, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(1) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(2)', 30000)
               .sleep(300).mouseMove(14, 7).click(0).click(0);
    });

    it('dblClick: div:nth-child(1) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(1), 19, 6, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(1) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(1)', 30000)
               .sleep(300).mouseMove(19, 6).click(0).click(0);
    });

    it('dblClick: div:nth-child(1) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(1), 19, 6, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(1) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(1)', 30000)
               .sleep(300).mouseMove(19, 6).click(0).click(0);
    });

    it('dblClick: div:nth-child(1) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(1), 19, 6, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(1) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(1)', 30000)
               .sleep(300).mouseMove(19, 6).click(0).click(0);
    });

    it('click: div:nth-child(1) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > input[type="text"]:nth-child(1), 56, 16, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(1) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > input[type="text"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(56, 16).click(0);
    });

    it('sendKeys: {BACK_SPACE}8{BACK_SPACE}8', async function(){
        await driver.sendKeys('{BACK_SPACE}8{BACK_SPACE}8');
    });

    it('click: input.ng-pristine, 38, 11, 0', async function(){
        await driver.sleep(300).wait('input.ng-pristine', 30000)
               .sleep(300).mouseMove(38, 11).click(0);
    });

    it('dblClick: div:nth-child(2) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(2), 27, 3, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(2)', 30000)
               .sleep(300).mouseMove(27, 3).click(0).click(0);
    });

    it('dblClick: div:nth-child(2) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(2), 23, 3, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(2)', 30000)
               .sleep(300).mouseMove(23, 3).click(0).click(0);
    });

    it('click: div:nth-child(2) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(2), 23, 3, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(2)', 30000)
               .sleep(300).mouseMove(23, 3).click(0);
    });

    it('dblClick: div:nth-child(2) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(1), 22, 3, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(1)', 30000)
               .sleep(300).mouseMove(22, 3).click(0).click(0);
    });

    it('dblClick: div:nth-child(2) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(1), 22, 3, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(1)', 30000)
               .sleep(300).mouseMove(22, 3).click(0).click(0);
    });

    it('dblClick: div:nth-child(2) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(1), 22, 3, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > div[name="test"].ma-input-number-box > div.ng-isolate-scope > div:nth-child(4) > div.ng-scope > div:nth-child(1)', 30000)
               .sleep(300).mouseMove(22, 3).click(0).click(0);
    });

    it('click: input.ng-pristine, 43, 15, 0', async function(){
        await driver.sleep(300).wait('input.ng-pristine', 30000)
               .sleep(300).mouseMove(43, 15).click(0);
    });

    it('sendKeys: {BACK_SPACE}1.11{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}5.12', async function(){
        await driver.sendKeys('{BACK_SPACE}1.11{BACK_SPACE}{BACK_SPACE}{BACK_SPACE}5.12');
    });

    function _(str){
        if(typeof str === 'string'){
            return str.replace(/\{\{(.+?)\}\}/g, function(all, key){
                return testVars[key] || '';
            });
        }
        else{
            return str;
        }
    }

};

if(module.parent && /mocha\.js/.test(module.parent.id)){
    runThisSpec();
}

function runThisSpec(){
    // read config
    let webdriver = process.env['webdriver'] || '';
    let proxy = process.env['wdproxy'] || '';
    let config = require(rootPath + '/config.json');
    let webdriverConfig = Object.assign({},config.webdriver);
    let host = webdriverConfig.host;
    let port = webdriverConfig.port || 4444;
    let match = webdriver.match(/([^\:]+)(?:\:(\d+))?/);
    if(match){
        host = match[1] || host;
        port = match[2] || port;
    }
    let testVars = config.vars;
    let browsers = webdriverConfig.browsers;
    browsers = browsers.replace(/^\s+|\s+$/g, '');
    delete webdriverConfig.host;
    delete webdriverConfig.port;
    delete webdriverConfig.browsers;

    // read hosts
    let hostsPath = rootPath + '/hosts';
    let hosts = '';
    if(fs.existsSync(hostsPath)){
        hosts = fs.readFileSync(hostsPath).toString();
    }
    let specName = path.relative(rootPath, __filename).replace(/\\/g,'/').replace(/\.js$/,'');

    browsers.split(/\s*,\s*/).forEach(function(browserName){
        let caseName = specName + ' : ' + browserName;

        let browserInfo = browserName.split(' ');
        browserName = browserInfo[0];
        let browserVersion = browserInfo[1];

        describe(caseName, function(){

            this.timeout(600000);
            this.slow(1000);

            let driver;
            before(function(){
                let self = this;
                let driver = new JWebDriver({
                    'host': host,
                    'port': port
                });
                let sessionConfig = Object.assign({}, webdriverConfig, {
                    'browserName': browserName,
                    'version': browserVersion,
                    'ie.ensureCleanSession': true,
                    'chromeOptions': {
                        'args': ['--enable-automation']
                    }
                });
                if(proxy){
                    sessionConfig.proxy = {
                        'proxyType': 'manual',
                        'httpProxy': proxy,
                        'sslProxy': proxy
                    }
                }
                else if(hosts){
                    sessionConfig.hosts = hosts;
                }
                self.driver = driver.session(sessionConfig).windowSize(1366, 768).config({
                    pageloadTimeout: 30000, // page onload timeout
                    scriptTimeout: 5000, // sync script timeout
                    asyncScriptTimeout: 10000 // async script timeout
                });
                self.testVars = testVars;
                let casePath = path.dirname(caseName);
                self.screenshotPath = rootPath + '/screenshots/' + casePath;
                self.diffbasePath = rootPath + '/diffbase/' + casePath;
                self.caseName = caseName.replace(/.*\//g, '').replace(/\s*[:\.\:\-\s]\s*/g, '_');
                mkdirs(self.screenshotPath);
                mkdirs(self.diffbasePath);
                self.stepId = 0;
                return self.driver;
            });

            module.exports();

            beforeEach(function(){
                let self = this;
                self.stepId ++;
                if(self.skipAll){
                    self.skip();
                }
            });

            afterEach(async function(){
                let self = this;
                let currentTest = self.currentTest;
                let title = currentTest.title;
                if(currentTest.state === 'failed' && /^(url|waitBody|switchWindow|switchFrame):/.test(title)){
                    self.skipAll = true;
                }
                if(!/^(closeWindow):/.test(title)){
                    let filepath = self.screenshotPath + '/' + self.caseName + '_' + self.stepId;
                    let driver = self.driver;
                    try{
                        // catch error when get alert msg
                        await driver.getScreenshot(filepath + '.png');
                        let url = await driver.url();
                        let html = await driver.source();
                        html = '<!--url: '+url+' -->\n' + html;
                        fs.writeFileSync(filepath + '.html', html);
                        let cookies = await driver.cookies();
                        fs.writeFileSync(filepath + '.cookie', JSON.stringify(cookies));
                    }
                    catch(e){}
                }
            });

            after(function(){
                return this.driver.close();
            });

        });
    });
}

function getRootPath(){
    let rootPath = path.resolve(__dirname);
    while(rootPath){
        if(fs.existsSync(rootPath + '/config.json')){
            break;
        }
        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));
    }
    return rootPath;
}

function mkdirs(dirname){
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirs(path.dirname(dirname))){
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

function callSpec(name){
    try{
        require(rootPath + '/' + name)();
    }
    catch(e){
        console.log(e)
        process.exit(1);
    }
}

function isPageError(code){
    return code == '' || / jscontent="errorCode" jstcache="\d+"|diagnoseConnectionAndRefresh|dnserror_unavailable_header|id="reportCertificateErrorRetry"|400 Bad Request|403 Forbidden|404 Not Found|500 Internal Server Error|502 Bad Gateway|503 Service Temporarily Unavailable|504 Gateway Time-out/i.test(code);
}

function catchError(error){

}
