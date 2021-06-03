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

const Apple_Quantity = 4;
const Mango_Quantity= 3;
const Orange_Quantity = 2;
const Banana_Quantity= 0;
const Grapes_Quantity = 0;

const { price:apple_price } = My_Inventory.apple;
const { price:mango_price  } = My_Inventory.mango;
const { price:orange_price  } = My_Inventory.orange;
const { price:banana_price  } = My_Inventory.banana;
const { price:grapes_price  } = My_Inventory.grapes;

My_Inventory.apple.quantity = My_Inventory.apple.quantity-Apple_Quantity;
My_Inventory.mango.quantity = My_Inventory.mango.quantity-Mango_Quantity;
My_Inventory.orange.quantity = My_Inventory.orange.quantity-Orange_Quantity;
My_Inventory.banana.quantity = My_Inventory.banana.quantity-Banana_Quantity;
My_Inventory.grapes.quantity = My_Inventory.grapes.quantity-Grapes_Quantity;

const Total = apple_price*Apple_Quantity+mango_price*Mango_Quantity+orange_price*Orange_Quantity+banana_price*Banana_Quantity+grapes_price*Grapes_Quantity;
console.log("Total is "+ Total);
console.log(My_Inventory);
