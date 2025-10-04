    let boxes=document.querySelectorAll(".box");
    let resetbtn=document.querySelector(".reset-btn");
    let newGamebtn=document.querySelector("#new-btn");
    let msgcontainer=document.querySelector(".msg-container");
    let msg=document.querySelector("#msg")

    let trunO=true;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
            if(trunO){
                box.innerText="O"
                trunO=false;
            }else{
                box.innerText="X"
                trunO=true;
            }
            box.disabled=true;

            checkWinner();
        });
    });


    const disableBoxes =() =>{
        for(let box of boxes){
            box.disabled=true;
        }
    }

     const enableBoxes =() =>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }
    const resetGame=()=>{
        trunO=true;
        enableBoxes();
        msgcontainer.classList.add("hide");
    }
    const showWinner=(winner)=>{
        msg.innerText=`congratulation,winner is ${winner}`;
        msgcontainer.classList.remove("hide");
    }
    const checkWinner=()=>{
        for(let pattern of winpattern){
            let pos1val=boxes[pattern[0]].innerText;
             let pos2val=boxes[pattern[1]].innerText;
              let pos3val=boxes[pattern[2]].innerText;

              if(pos1val !="" && pos2val !="" && pos3val !=""){
                if(pos1val === pos2val && pos2val === pos3val){
                        disableBoxes();
                        showWinner(pos1val);
                        
                }
                
              }
            
        }
    }

    newGamebtn.addEventListener("click",resetGame);
    resetbtn.addEventListener("click",resetGame);
