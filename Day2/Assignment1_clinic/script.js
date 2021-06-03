const My_Inventory = {
    mask:{
        quantity:999,
        price:20
    },
    sanitizer:{
        quantity:500,
        price:100
    },
    paracitamol:{
        quantity:900,
        price:50
    }
}
const Mask_Quantity = 3;
const Sanitizer_Quantity= 1;
const Paracitamol_Quantity = 1;
My_Inventory.mask.quantity = My_Inventory.mask.quantity-Mask_Quantity;
My_Inventory.sanitizer.quantity = My_Inventory.sanitizer.quantity-Sanitizer_Quantity;
My_Inventory.paracitamol.quantity = My_Inventory.paracitamol.quantity-Paracitamol_Quantity;

const Total = My_Inventory.mask.price*Mask_Quantity+My_Inventory.sanitizer.price*Sanitizer_Quantity+My_Inventory.paracitamol.price*Paracitamol_Quantity;
console.log("Total is "+ Total);
console.log(My_Inventory);