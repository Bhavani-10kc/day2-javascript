      var weekday = "tuesday"
        var weekend
        var age =21
        var discountprice
        var weekdayprice =12
        var price=15
        if((weekday === "monday")||(weekday==="tuesday")||(weekday==="wednesday")||(weekday==="thursday")||(weekday==="friday")){
            if(age >=65||age<12){
            discountprice = weekdayprice*0.5  
            console.log(discountprice)
            }
            else{
                console.log("standard price",weekdayprice)
            }
        }
        else if((weekend==="saturday")||(weekend==="sunday")){
            if(age>=65||age<12){
                discountprice = price*0.3
                console.log(discountprice)
            }
       else{
        console.log("standard price",price)
       }
        }
        else{
            console.log("invalid data")
        }

 