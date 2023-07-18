let string="";
let count=0;
let button=document.querySelectorAll(".button");
Array.from(button).forEach((ele)=>{
    ele.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='x'){
            string=string+'*'   
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='%'){
            string=string/100;
    
            document.querySelector('input').value=string;
        }
     else if(e.target.innerHTML=='='){
        string=eval(string);

        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='C'){
        string="";
        document.querySelector('input').value=string;
    }
    else{
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
    }
    })
})