let you =0;
let machine = 0;
document.querySelector("#score").innerHTML = `Your Score : ${0}       Machine Score : ${0} `;
let prop = document.querySelectorAll(".choice");
prop.forEach(val => val.style.borderRadius = "100px");

const hoverhandler1 = (val) =>
{
    val.addEventListener("mouseover", () => {
        //console.log("hovered");
        val.classList.add("hover");
    })
}

const hoverhandler2 = (val) =>
{
    val.addEventListener("mouseout", () => {
       // console.log("hovered out");
        val.classList.remove("hover");
        
    })
}
prop.forEach(hoverhandler1);
prop.forEach(hoverhandler2);

function machinechoice()
{
    let mn = 0;
    while(mn === 0)
    {
     mn = Math.round((Math.random() *10) % 2);
    }
     return mn;
}
let text="";
let res = "";

let rock = document.querySelector("#rock");
rock.addEventListener("click",() => {
    text = "YOU Choice : Rock <br>"; 
    console.log("You choice rock ")
  
    switch(machinechoice()-1){
        case 0 : console.log("Machine Choice : rock==> DRAW"); 
                    text += "Machine Choice : Rock"; res = "RESULT : DRAW";
        break;
        case 1 : console.log("Machine Choice : paper==> YOU LOOSE"); 
        text += "Machine Choice : Paper"; res = "RESULT : YOU LOOSE";
        machine++;
        break;
        case 2 : console.log("Machine Choice : scissor==> YOU WIN"); 
        text += "Machine Choice : Scissor"; res = "RESULT : YOU WIN";
        you++;
        break;
    }
    document.getElementById("content").innerHTML = text;
    document.getElementById("res").innerHTML = res;
    document.querySelector("#score").innerHTML = `Your Score : ${you}       Machine Score : ${machine} `;
});

let paper = document.querySelector("#paper");
paper.addEventListener("click",() => {
    text = "YOU Choice : Papper <br>"; 
    console.log("You choice paper ")

    switch(machinechoice()-1){
        case 0 : console.log("machine choice rock ==> YOU WIN");
        text += "Machine Choice : Rock"; res = "RESULT : YOU WIN";
        you++;
        break;
        case 1 : console.log("Machine Choice : paper==> DRAW"); 
        text += "Machine Choice : Paper"; res = "RESULT : DRAW";
        break;
        case 2 : console.log("Machine Choice : scissor==> YOU LOOSE");
        text += "Machine Choice : Scissor"; res = "RESULT : YOU LOOSE";
        machine++;
        break;
    }
    document.getElementById("content").innerHTML = text;
    document.getElementById("res").innerHTML = res;
    document.querySelector("#score").innerHTML = `Your Score : ${you}       Machine Score : ${machine} `;
});

let scissor = document.querySelector("#scissor");
scissor.addEventListener("click",() => {
    text = "YOU Choice : Scissor <br>"; 
    console.log("You choice scissor ")

    switch(machinechoice()-1){
        case 0 : console.log("Machine Choice : rock==> YOU LOOSE"); 
        text += "Machine Choice : Rock"; res = "RESULT : YOU LOOSE";
        machine++;
        break;
        case 1 : console.log("Machine Choice : paper==> YOU WIN");
        text += "Machine Choice : Paper"; res = "RESULT : YOU WIN";
        you++;
        break;
        case 2 : console.log("Machine Choice : scissor==> DRAW"); 
        text += "Machine Choice : Scissor"; res = "RESULT : DRAW";
        break;
    }
    document.getElementById("content").innerHTML = text;
    document.getElementById("res").innerHTML = res;
    document.querySelector("#score").innerHTML = `Your Score : ${you}       Machine Score : ${machine} `;
});


let btn = document.querySelector("#reset");
btn.style.borderRadius = "100px"

btn.addEventListener("click",()=>
{
    document.getElementById("content").innerHTML = "";
    document.getElementById("res").innerHTML = "";
    you = 0 , machine = 0;
    document.querySelector("#score").innerHTML = `Your Score : ${you}       Machine Score : ${machine} `;
});

