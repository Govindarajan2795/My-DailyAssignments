function launchBrowser(browserName){
    if (browserName==="Chrome"){
        console.log("Launch browser Chrome");
    }
    else {
        console.log ("Invalid browser")
    }
 
}

function runTests(testType){
    switch (testType){
        case  "smoke":
            console.log("Execute the smoke testing");
            break;
        case "Sanity" :
            console.log("Execute the Sanity Testing");
            break;
        case "Regression" :
            console.log("Execute the Regression");
            break;
            default:
                console.log("Execute the Smoke testing");
                break;
                
            
            
            
    }
}

launchBrowser("Chrome");
launchBrowser("Edge");
runTests("smoke");
runTests("Sanity")
runTests("Regression");
runTests("Retesting");
