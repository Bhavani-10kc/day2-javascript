var teaType = 'Masala';
var addOn = 'Extra Milk';
switch (teaType) {
case 'Regular':
basePrice = 15;
break;
 case 'Masala':
 basePrice = 20;
break;
case 'Ginger':
basePrice = 25;
break;
default:
 console.log("order first");
}
switch (addOn) {
 case 'Extra Sugar':
 extraP = 2.50;
 break;
case 'Extra Milk':
 extraP = 5;
     break;
     case 'No Add-ons':
     extraP = 0;
     break;
     default:
     console.log("order first"); 
     break;
    }
    let totalPrice = basePrice + extraP;
    
    if (basePrice > 0) {
    console.log(totalPrice);
    } else {
    console.log("Konu bro");
    }