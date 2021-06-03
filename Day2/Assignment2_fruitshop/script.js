const My_Inventory = {
    apple:{
        quantity:200,
        price:100
    },
    mango:{
        quantity:300,
        price:200
    },
    orange:{
        quantity:555,
        price:50
    },
    banana:{
        quantity:645,
        price:25
    },
    grapes:{
        quantity:799,
        price:100
    }
}
const apple_Quantity = 4;
const mango_Quantity= 3;
const orange_Quantity = 2;
const banana_Quantity= 0;
const grapes_Quantity = 0;
My_Inventory.apple.quantity = My_Inventory.apple.quantity-apple_Quantity;
My_Inventory.mango.quantity = My_Inventory.mango.quantity-mango_Quantity;
My_Inventory.orange.quantity = My_Inventory.orange.quantity-orange_Quantity;
My_Inventory.banana.quantity = My_Inventory.banana.quantity-banana_Quantity;
My_Inventory.grapes.quantity = My_Inventory.grapes.quantity-grapes_Quantity;

const Total = My_Inventory.apple.price*apple_Quantity+My_Inventory.mango.price*mango_Quantity+My_Inventory.orange.price*orange_Quantity+My_Inventory.banana.price*banana_Quantity+My_Inventory.grapes.price*grapes_Quantity;
console.log("Total is "+ Total);
console.log(My_Inventory);
