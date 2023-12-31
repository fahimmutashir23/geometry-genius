
function getInputValue(input){
    const getInput = document.getElementById(input);
    const getInputString = getInput.value;
    const finalInput = parseFloat(getInputString);
    getInput.value = ""
    return finalInput;
}

function setResult(result , calculateValue){
    const area = document.getElementById(result);
    area.innerText = calculateValue;
}
//-----------------------------------triangle calculate---------------------------------------//

function enterTryangleHit(){
    const triangleBase = getInputValue("triangleInputBase")
    const tritangleHight = getInputValue("triangleInputHight")

    if(isNaN(triangleBase) || isNaN(tritangleHight)){
        return alert("please enter a number")
    }

    const triangleTotal = 0.5 * triangleBase * tritangleHight; 
    const calculate = triangleTotal.toFixed(2);
    
    setResult('triangleResult', calculate)
    setAreaCalculator("Triangle", calculate)
}
document.getElementById("triangleBtn").addEventListener('click', enterTryangleHit)

//press enter to submit

document.getElementById("triangleInputHight").addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        enterTryangleHit()
    }
})
document.getElementById('triangleInputBase').addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        enterTryangleHit()
    }
})

//press arrow to move coursore

document.getElementById('triangleInputBase').addEventListener('keyup', function(e){
    if(e.key === 'ArrowRight'){
        document.getElementById('triangleInputHight').focus()
    }
})
document.getElementById('triangleInputHight').addEventListener('keyup', function(e){
    if(e.key === 'ArrowLeft'){
        document.getElementById('triangleInputBase').focus()
    }
})

//------------------------------------rectangle calculate-------------------------------------//

function enterRectangleHit(){
    const rectangleWidth = getInputValue("rectangleInputWidth");
    const rectangleHight = getInputValue("rectangleInputHight");
    
    if(isNaN(rectangleHight) || isNaN(rectangleWidth)){
        return alert("please enter a number")
    }
    
    const rectangleTotal = rectangleHight * rectangleWidth;
    const calculateRectangle = rectangleTotal.toFixed(2)
    
    setResult('rectangleResult', calculateRectangle)
    setAreaCalculator("Rectangle", calculateRectangle)
}

document.getElementById('rectangleBtn').addEventListener('click', enterRectangleHit)

//press enter to submit

document.getElementById('rectangleInputHight').addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        enterRectangleHit()
    }
})
document.getElementById('rectangleInputWidth').addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        enterRectangleHit()
    }
})

//press arrow to move coursor

document.getElementById('rectangleInputWidth').addEventListener('keyup', function(e){
    if(e.key === 'ArrowRight'){
        document.getElementById('rectangleInputHight').focus()
    }
})
document.getElementById('rectangleInputHight').addEventListener('keyup', function(e){
    if(e.key === 'ArrowLeft'){
        document.getElementById('rectangleInputWidth').focus()
    }
})

//---------------------------------parallelogram calculate------------------------------------//

function enterParallelogramHit(){

    const parallelogramBase = getInputValue("parallelogramInputBase");
    const parallelogramWidth = getInputValue("parallelogramInputHight");
    
    if(isNaN(parallelogramBase) || isNaN(parallelogramWidth)){
        return alert("please enter a number")
    }
    
    const parallelogramTotal = parallelogramBase * parallelogramWidth;
    const calculateparallelogram = parallelogramTotal.toFixed(2)
    
    setResult('parallelogramResult', calculateparallelogram)
    
    setAreaCalculator("Parallelogram", calculateparallelogram)
}
document.getElementById("parallelogramBtn").addEventListener('click', enterParallelogramHit)

//press enter to submit

document.getElementById('parallelogramInputHight').addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        enterParallelogramHit()
    }
})
document.getElementById('parallelogramInputBase').addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        enterParallelogramHit()
    }
})

//press arrow to move coursor

document.getElementById('parallelogramInputBase').addEventListener('keyup', function(e){
    if(e.key === 'ArrowRight'){
        document.getElementById('parallelogramInputHight').focus()
    }
})

document.getElementById('parallelogramInputHight').addEventListener('keyup', function(e){
    if(e.key === 'ArrowLeft'){
        document.getElementById('parallelogramInputBase').focus()
    }
})

//---------------------------------rhombus calculate------------------------------------//

function enterRhombusHit(){

    const rhombusBase = getInputValue("rhombusInputBase");
    const rhombusHight = getInputValue('rhombusInputHight');
    
    if(isNaN(rhombusBase) || isNaN(rhombusHight)){
        return alert("please enter a number")
    }
    
    const rhombusTotal = rhombusBase * rhombusHight;
    const calculateRhombus = rhombusTotal.toFixed(2)
    setResult("rhombusResult", calculateRhombus)
    
    setAreaCalculator("Rhombus", calculateRhombus)
}
document.getElementById('rhombusBtn').addEventListener('click', enterRhombusHit)

//press enter to submit

document.getElementById('rhombusInputHight').addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        enterRhombusHit()
    }
})
document.getElementById('rhombusInputBase').addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        enterRhombusHit()
    }
})

//press arrow to move coursor

document.getElementById('rhombusInputBase').addEventListener('keyup', function(e){
    if(e.key === 'ArrowRight'){
        document.getElementById('rhombusInputHight').focus()
    }
})

document.getElementById('rhombusInputHight').addEventListener('keyup', function(e){
    if(e.key === 'ArrowLeft'){
        document.getElementById('rhombusInputBase').focus()
    }
})

//---------------------------------pentagon calculate------------------------------------//

function enterPentagonHit(){

    const pentagonBase = getInputValue('pentagonInputBase');
    const pentagonHight = getInputValue('pentagonInputHight');
    
    if(isNaN(pentagonBase) || isNaN(pentagonHight)){
        return alert("please enter a number")
    }
    
    const pentagonTotal = 0.5 * pentagonBase * pentagonHight;
    const calculatepentagon = pentagonTotal.toFixed(2)
    
    setResult("pentagonResult", calculatepentagon)
    
    setAreaCalculator("Pentagon", calculatepentagon)
}
document.getElementById("pentagonBtn").addEventListener('click', enterPentagonHit)

//press enter to submit

document.getElementById('pentagonInputHight').addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        enterPentagonHit()
    }
})
document.getElementById('pentagonInputBase').addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        enterPentagonHit()
    }
})

//press arrow to move coursor

document.getElementById('pentagonInputBase').addEventListener('keyup', function(e){
    if(e.key === 'ArrowRight'){
        document.getElementById('pentagonInputHight').focus()
    }
})

document.getElementById('pentagonInputHight').addEventListener('keyup', function(e){
    if(e.key === 'ArrowLeft'){
        document.getElementById('pentagonInputBase').focus()
    }
})

//---------------------------------ellipse calculate------------------------------------//

function enterEllipseHit(){

    const ellipseBase = getInputValue("ellipseInputBase");
    const ellipseHight = getInputValue("ellipseInputHight");
    
    if(isNaN(ellipseBase) || isNaN(ellipseHight)){
        return alert("please enter a number")
    }
    const ellipseTotal = 3.1416 * ellipseBase * ellipseHight;
    const calculateEllipse = ellipseTotal.toFixed(2)
    
    setResult('ellipseResult', calculateEllipse)
    setAreaCalculator("Ellipse", calculateEllipse,)
}
document.getElementById("ellipseBtn").addEventListener('click', enterEllipseHit)

//press enter to submit

document.getElementById('ellipseInputHight').addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        enterEllipseHit()
    }
})
document.getElementById('ellipseInputBase').addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        enterEllipseHit() 
    }
})

//press arrow to move coursor

document.getElementById('ellipseInputBase').addEventListener('keyup', function(e){
    if(e.key === 'ArrowRight'){
        document.getElementById('ellipseInputHight').focus()
    }
})

document.getElementById('ellipseInputHight').addEventListener('keyup', function(e){
    if(e.key === 'ArrowLeft'){
        document.getElementById('ellipseInputBase').focus()
    }
})

//-------------------------------area calculate-----------------------------------------------//

function setAreaCalculator(elementName, elementValue){
    const areaCalculator = document.getElementById('area-calculator');
    const count = areaCalculator.childElementCount
    const p = document.createElement("p");
    p.classList.add("mb-2")
    p.innerHTML = `
    ${count + 1}. ${elementName} ${elementValue} ${"cm<sup>2</sup>"}
    <span class = "ml-6"><button class = "btn btn-primary btn-sm">Convert</button></span>
    `
    areaCalculator.appendChild(p)
}





