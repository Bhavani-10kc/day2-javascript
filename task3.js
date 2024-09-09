    var gpa = 3
    var extraActivities = 3
    var communityservice = 100
    if(gpa>=3.5){
        if(extraActivities >=0||communityservice >=0){
            console.log("merit based scholarship")
        }
    }
    else if(gpa>=3 && gpa<3.5){
        if(extraActivities >=2|| communityservice >=0 ){
            console.log("leadership scholarship")
        }
    }
    else if(gpa >= 2.5 && gpa<3){
        if(extraActivities >=0||communityservice>=100){
          console.log("community scholarship")  
        }
    }
 else{
    console.log("invalid scholarship")
 }
