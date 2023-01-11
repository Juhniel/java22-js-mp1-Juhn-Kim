const rowContainer = document.createElement("div");
const numberContainer = document.createElement("div");
document.body.append(rowContainer);
document.body.append(numberContainer);

rowContainer.style.cssText = "display: flex; flex-direction: column; margin: auto; width: 52%; height: 300px;"
numberContainer.style.cssText = `border: 2px solid black; display: flex; justify-content: space-around; 
margin: auto; margin-top: 50px; width: 50%; height: 350px;`

for(let i = 0; i < 5; i++) {
    const rowParagraph = document.createElement("p");
    rowParagraph.innerText = "Rad " + (i+1);
    rowParagraph.classList.add("row-paragraph");
    rowContainer.append(rowParagraph);

    const fontSizePx = 14+(i*9);
    const hue = 120+(i*20);
    rowParagraph.style.cssText = `display: flex; justify-content: center; font-size: ${fontSizePx}px; 
    background: hsl(${hue},90%,85%); color: hsl(240,90%,70%); font-weight: bold; margin: 15px;`
}



const numberArr = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
for(let i = 0; i < 3; i++) {
    const numberBox = document.createElement("div");
    numberBox.style.cssText = `display: flex; flex-direction: column; justify-content: center; align-items: center;
    width: 70px; height: 230px; margin: auto; background: hsl(240,50%,75%);`
    numberContainer.append(numberBox);

    for (let j = 0; j < 10; j++) {
        const numbers = document.createElement("p");
        numbers.innerText = j;
        numbers.style.cssText = `display: flex; width: 50px; font-size: 18px; margin: 0px;`
    
        if(i === 0){
            if(j%2 == 0 && j != 4){
                numbers.style.background = "black";
                numbers.style.color = "white";
            }else if(j==4){
                numbers.style.background = "rgba(0, 0, 0, 1);"
            }
            else{
                numbers.style.background = "white";
            }

        }else if(i == 1){
            numbers.innerText = 9-j;
            numbers.style.justifyContent = "center";
            if(j%2 == 0){
                numbers.style.background = "white";
            }else if(j == 1){
                numbers.style.background = "rgba(0, 0, 0, 1);"
            }else{
                numbers.style.background = "black";
                numbers.style.color = "white";
            }
        }else{
            numbers.innerText = numberArr[j];
            numbers.style.justifyContent = "flex-end";
            if(j%2 == 0){
                numbers.style.background = "black";
                numbers.style.color = "white";
            }else if(j==5){
                numbers.style.background = "rgba(0, 0, 0, 1);"
            }
            else{
                numbers.style.background = "white";
            }
        }
        numberBox.append(numbers);
    }
}



