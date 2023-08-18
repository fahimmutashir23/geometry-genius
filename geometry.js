
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

document.getElementById("triangleBtn").addEventListener('click', function(){
    const triangleBase = getInputValue("triangleInputBase")
    const tritangleHight = getInputValue("triangleInputHight")

    if(isNaN(triangleBase) || isNaN(tritangleHight)){
        return alert("please enter a number")
    }

    const triangleTotal = 0.5 * triangleBase * tritangleHight; 
    const calculate = triangleTotal.toFixed(2);
    
    setResult('triangleResult', calculate)
    setAreaCalculator("Triangle", calculate)
})

//------------------------------------rectangle calculate-------------------------------------//

document.getElementById('rectangleBtn').addEventListener('click', function(){
    const rectangleWidth = getInputValue("rectangleInputWidth");
    const rectangleHight = getInputValue("rectangleInputHight");

    if(isNaN(rectangleHight) || isNaN(rectangleWidth)){
        return alert("please enter a number")
    }

    const rectangleTotal = rectangleHight * rectangleWidth;
    const calculateRectangle = rectangleTotal.toFixed(2)
    
    setResult('rectangleResult', calculateRectangle)
    setAreaCalculator("Rectangle", calculateRectangle)
})

//---------------------------------parallelogram calculate------------------------------------//

document.getElementById("parallelogramBtn").addEventListener('click', function(){
    const parallelogramBase = getInputValue("parallelogramInputBase");
    const parallelogramWidth = getInputValue("parallelogramInputHight");

    if(isNaN(parallelogramBase) || isNaN(parallelogramWidth)){
        return alert("please enter a number")
    }

    const parallelogramTotal = parallelogramBase * parallelogramWidth;
    const calculateparallelogram = parallelogramTotal.toFixed(2)

    setResult('parallelogramResult', calculateparallelogram)

    setAreaCalculator("Parallelogram", calculateparallelogram)
})

//---------------------------------rhombus calculate------------------------------------//

document.getElementById('rhombusBtn').addEventListener('click', function(){
    const rhombusBase = getInputValue("rhombusInputBase");
    const rhombusHight = getInputValue('rhombusInputHight');

    if(isNaN(rhombusBase) || isNaN(rhombusHight)){
        return alert("please enter a number")
    }

    const rhombusTotal = rhombusBase * rhombusHight;
    const calculateRhombus = rhombusTotal.toFixed(2)
    setResult("rhombusResult", calculateRhombus)

    setAreaCalculator("Rhombus", calculateRhombus)
})

//---------------------------------pentagon calculate------------------------------------//

document.getElementById("pentagonBtn").addEventListener('click', function(){
    const pentagonBase = getInputValue('pentagonInputBase');
    const pentagonHight = getInputValue('pentagonInputHight');

    if(isNaN(pentagonBase) || isNaN(pentagonHight)){
        return alert("please enter a number")
    }

    const pentagonTotal = 0.5 * pentagonBase * pentagonHight;
    const calculatepentagon = pentagonTotal.toFixed(2)

    setResult("pentagonResult", calculatepentagon)

    setAreaCalculator("Pentagon", calculatepentagon)
})

//---------------------------------ellipse calculate------------------------------------//

document.getElementById("ellipseBtn").addEventListener('click', function(){
    const ellipseBase = getInputValue("ellipseInputBase");
    const ellipseHight = getInputValue("ellipseInputHight");

    if(isNaN(ellipseBase) || isNaN(ellipseHight)){
        return alert("please enter a number")
    }
    const ellipseTotal = 3.1416 * ellipseBase * ellipseHight;
    const calculateEllipse = ellipseTotal.toFixed(2)

    setResult('ellipseResult', calculateEllipse)
    setAreaCalculator("Ellipse", calculateEllipse,)
})


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




