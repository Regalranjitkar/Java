const Page_Wrapper = document.createElement('div');
document.body.appendChild(Page_Wrapper);

const TShirt = document.createElement('button');
Page_Wrapper.appendChild(TShirt);
TShirt.innerHTML = "T-shirt";
TShirt.addEventListener('click',Function_click);
TShirt.setAttribute('value','T-shirt');

const Pant = document.createElement('button');
Page_Wrapper.appendChild(Pant);
Pant.innerHTML = "Pant";
TShirt.addEventListener('click',Function_click);
TShirt.setAttribute('value','Pant');

const Ball = document.createElement('button');
Page_Wrapper.appendChild(Ball);
Ball.innerHTML = "Ball";
TShirt.addEventListener('click',Function_click);
TShirt.setAttribute('value','Ball');

const Vollyball = document.createElement('button');
Page_Wrapper.appendChild(Vollyball);
Vollyball.innerHTML = "Vollyball";
TShirt.addEventListener('click',Function_click);
TShirt.setAttribute('value','Vollyball');

// creating a function
function calculation(Name,Discount,Price){

    console.log("You selected " + Name);
    console.log("The price of "+Name+" is "+Price);
    console.log("You get "+Discount+"% discount on "+Name);
    const PAD = Price-((Discount/100)*Price);
    console.log("The price after discount is "+PAD);
}



function Function_click(event){
    if(event.target.value == "T-shirt"){
        calculation("T-shirt",20,200);
    }
    else if(event.target.value == "Pant"){
        calculation("Pant",30,500);
    }
    else if(event.target.value == "Ball"){
        calculation("Ball",2,150);
    }
    else if(event.target.value == "Vollyball"){
        calculation("Vollyball",0,175);
    }
    
}
