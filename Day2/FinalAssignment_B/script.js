// creating div
const Page_Wrapper = document.createElement('div');
document.body.appendChild(Page_Wrapper);
// creating input section
const My_Input = document.createElement('input');
Page_Wrapper.appendChild(My_Input);
// creating button
const Add_Btn = document.createElement('button');
Page_Wrapper.appendChild(Add_Btn);
Add_Btn.innerHTML = "Add"
// cerating list
const UL = document.createElement('ul');
Page_Wrapper.appendChild(UL);

let count = 0;

const My_Object = {
    
}
// listening event
Add_Btn.addEventListener('click', read_write);
// adding function
function read_write(){
    count++
    const Inner_List = document.createElement('li');
    UL.appendChild(Inner_List);
    Inner_List.innerHTML = My_Input.value;
    const Del_Btn = document.createElement('button');
    UL.appendChild(Del_Btn);
    Del_Btn.innerHTML = "Delete"
    
    // inserting object inside object
    const Outer_Function = {
        value:{

        },
        name:{

        }
    }


    Outer_Function.value = My_Input.value;
    Outer_Function.name = "something";
    My_Object[count]=Outer_Function;
    console.log(My_Object);
    
    My_Input.value = "";
    
};


