const inquirer = require("inquirer")
console.log("Javascript FAQ questions")
console.log("--------------------------")
inquirer.prompt([
    {
        type: 'rawlist',
        message: "Which type of JavaScript language is _",
        choices: [
            { name: "Object-Oriented" },
            { name: "Object-Based" },
            { name: "Assembly-language" },
            { name: "High-level" },
        ],
        name: "first"
    },
  
])

    .then((ans) => {

        if (ans.first != "Object-Oriented") {
            console.log("Wrong answer");
            console.log("Correct answer is -- Object-Oriented")

        } else {
            console.log("Right answer")
        }


        inquirer.prompt([
            {
                type: 'rawlist',
                message: " Which one of the following also known as Conditional Expression:",
                choices: [
                    { name: "Alternative to if-else" },
                    { name: "Switch statement" },
                    { name: "If-then-else statement" },
                    { name: "immediate if" },
                ],
                name: "second"
            }
        ])
        .then((ans)=>{
            if (ans.second!= "immediate if") {
                console.log("Wrong answer");
                console.log("Correct answer is -- immediate if")
    
            } else {
                console.log("Right answer")
            }



            inquirer.prompt([
                {
                    type: 'rawlist',
                    message: " Why so JavaScript and Java have similar name?",
                    choices: [
                        { name: "JavaScript is a stripped-down version of Java" },
                        { name: "JavaScript's syntax is loosely based on Java's" },
                        { name: "They both originated on the island of Java" },
                        { name: "None of the above" },
                    ],
                    name: "third"
                }
            ])
            .then((ans)=>{
                if (ans.third!= "JavaScript's syntax is loosely based on Java's") {
                    console.log("Wrong answer")
                    console.log("Correct answer is -- JavaScript's syntax is loosely based on Java's")
        
                } else {
                    console.log("Right answer")
                }
                inquirer.prompt([
                    {
                        type: 'rawlist',
                        message: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
                        choices: [
                            { name: "The User's machine running a Web browser" },
                            { name: " The Web server" },
                            { name: "A central machine deep within Netscape's corporate offices" },
                            { name: "None of the above" },
                        ],
                        name: "four"
                    }
                ])
                .then((ans)=>{
                    if (ans.four!= "The User's machine running a Web browser") {
                        console.log("Wrong answer")
                        console.log("Correct answer is -- The User's machine running a Web browser")
            
                    } else {
                        console.log("Right answer")
                    }
    
                })

            })
    
    
    








        })















    })

    .catch((err) => {
        console.log(err)
    })