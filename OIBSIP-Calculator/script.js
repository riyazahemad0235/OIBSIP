let outputData=document.body.querySelector(".outputData")
let btn=document.body.querySelectorAll(".btn")
let expression= ""
const operator=["+","-","*","/","%"]
btn.forEach(btns => {
    btns.addEventListener("click",()=>{
        let lastChar=expression.slice(-1)
        const value= btns.innerText;
        if(value==="C"){
            outputData.innerText=""
            expression=""        
        }
        else if(value==="="){
            try{
                expression=eval(expression).toString()
                outputData.innerText=expression
            }
                catch{
                outputData.innerText="error";
                expression=""
            }
        }
        else{
            if(operator.includes(value) && operator.includes(lastChar)){
                return;
            }
            expression= expression+value;
            outputData.innerText=expression
        }
        outputData.classList.remove("animate");
        void outputData.offsetWidth;
        outputData.classList.add("animate")
    })
    
});

