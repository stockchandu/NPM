var inquirer = require('inquirer');
console.log("welcome to the world of Foodizm")
inquirer

  .prompt([
    /* Pass your questions in here */

    {
        type:"input",
        message:"create your username",
        name:"username",
       
    },
    {
        type:"password",
        message:"create your password",
        name:"password",
       
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("you have successfully created account ")
    console.log(answers)
  
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });