// Creates a function to genrate temlate for README 
function ReadMeTemplate(data) {
    return `
    <style>
    <h1 align='center'>${data.projectTitle}</h1>
    
    ## Description
    ${data.description}
    
    ## Table of Contents
        -[Description](#Desrcription)
        -[Installation](#Installation)
        -[Usage](#Usage)
        -[Credits](#Credits)
        -[Licensen](#License)
        -[Badges](#Badges)
        -[Freatures](#Freatures)
        -[Contributing](#Contributing)
        -[Test](#Tests)
    
    ## Installation
        ${data.installation}
        
    ## Usage 
        ${data.usage}
        
    ## Credits 
        ${data.credits}
        
    ## License 
        This application is covered by ${data.license} license.
        
    ## Badges 
    
    ## Features 
        ${data.features}
        
    ## contributing
    
    ## Tests
    
    
    `;
}

module.exports = ReadMeTemplate;

