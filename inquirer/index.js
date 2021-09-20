var inquirer = require('inquirer');
console.log("Please create account to get delicious Chicken Kabab");


inquirer.prompt([
   

    {
        type:"input",
        message:"create your username",
        name:"username",
       
    },
    {
        type:"password",
        message:"create your password",
        mask:"*",
        name:"password",
       
    }
  ])
  .then((answers) => {
 
      console.log("you have successfully created account ");

      console.log(`welcome to kabab center Mr/Mrs- ${answers.username}`);
  
    console.log("Please choose your Kabab Type")
    inquirer.prompt([

            {
              type:"rawlist",
              message:"choose your kabab",
              choices:[
                {value:200,name:"Chicken Malai Seekh Kebab"},
                {value:300,name:"Chicken Gilafi Kebab"},
                {value:299,name:"Kalmi Chicken Kebab"},
                {value:199,name:"Chicken Galawat Kebab"},
                {value:149,name:"Chicken Shami Kebab"},
                {value:599,name:"Chicken Malai Kebab"},
                {value:399,name:"Chicken Handi Kebab"},
                {value:699,name:"Cheese Chicken Kebab"},
                {value:799,name:"Peshawari Chicken Kebab"},
              ],
              name:"list"
            },

            {
              type:"input",
              message:"Please enter quantity",
              name:"quantity",
              validate(value){

                let valid=!isNaN(parseInt(value));
                return valid || "enter numeric value"
              },
              filter(value){
                return parseInt(value)
              }
            },

            {
              type:"confirm",
              message:"Do you want to deliver it ?",
              name:"status",
              

            },
            {
              type:"input",
              message:"Please Enter Name",
              name:"fullname",
            },

            {
              type:"input",
              message:"Please Enter your Full Address with Pincode?",
              name:"address",
            },

            
            {
              type:"input",
              message:"please enter valid phone Number",
              name:"phone",
              validate(value){
                let valid=value.length===10;
                if(valid){
                  return true;
                }
                return "Please enter 10 digit phone number"
              }
            }



    ])
   .then((data)=>{
  
         console.log("Please Wait We Are Calculating Your  Bill")


         let{quantity,fullname,address,phone,list}=data;
         setTimeout(()=>{

          console.log("Your Bill Details");
          console.log("------------------");

          console.log(`1- Your Name-${fullname}`);
          console.log(`2- Your Phone Number-${phone}`);

          console.log(`3- Your Address-${address}`);

          console.log(`4- Product Price-${list}`);

          console.log(`5- Total Quantity-${quantity}`);

          let price=quantity*list;
          let gst=18/100;

          let pre_final=price*gst;

          let final=price+pre_final;

          console.log(`6- Total Price qty*price ₹ ${price} `);

          if(data.status==true){
            console.log("7- Delivery Status:- Yes")
          }else{
           console.log("7- Delivery Status:- No")
          }
 
         console.log("------------------------");

         console.log(`Total GST 18%- ₹ ${pre_final.toFixed(2)}`)
         console.log(`Total Bill with GST- ₹ ${final.toFixed(2)}`);
         },3000);


         setTimeout(()=>{

          inquirer.prompt([

            {
                type:"confirm",
                message:"Would you like to proceed with the order ?",
                name:"final",
                
  
            },

          ])

          .then((ans)=>{

            if(ans.final==true){
              console.log("Congratulations 😍 ,Our delivery boy shortly deliver your Delicious Kabab")
            }else{
              console.log("See you Again 😞 ! Have a great day , Thank you for choosing us")
            }
             
          })

         },4000)
   })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });