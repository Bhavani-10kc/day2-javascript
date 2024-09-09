      var membership = "vip" 
       var purchase =1000
       if(membership === "regular"){
        if(purchase <=100){
            console.log("no discount")
        }
        else if (purchase >=100 && purchase<=500){
            console.log("5%discount")
        }
        else if(purchase >500){
            console.log("10% discount")
        }
       }
       else if(membership === "vip"){
        if(purchase <=100){
            console.log("10% discount")
        }
        else if(purchase >=100 && purchase<=500){
            console.log("15% discount")
        }
        else if(purchase >500){
            console.log("20% discount")
        }
       } 
       else if(membership!=="regular"||membership!=="vip"){
        console.log("Invalid membership")
       }
  