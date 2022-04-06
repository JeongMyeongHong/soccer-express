exports.getcalc = (payload) => {
    const {num1, opcode, num2} = payload
    const results = {num1, opcode, num2}
    switch (opcode){
        case "+" :
            results.result = (Number(num1) + Number(num2))
            return results
        case "-" :
            results.result = (Number(num1) - Number(num2))
            return results
        case "*" :
            results.result = (Number(num1) * Number(num2))
            return results
        case "/" :
            results.result = (Number(num1) / Number(num2))
            return results
        case "%" :
            results.result = (Number(num1) % Number(num2))
            return results
}}

exports.getBmi = (payload) => {
    const {name, height, weight} = payload
    //Obtain user inputs
    let _height=Number(height);
    let _weight=Number(weight);
  
    //Perform calculation
    let bmi = _weight*10000/Math.pow(_height,2);
  
    let output = Math.round(bmi*100)/100;
    let result = {name, height, weight}
    console.log(`계산중인 값들 : ${JSON.stringify(result)}`)
    if (output<18.5)
      result.bmi = "저체중";
    if (output>=18.5 && output<=25)
      result.bmi = "정상";
    if (output>=25 && output<=30)
      result.bmi = "과체중";
    if (output>30)
      result.bmi = "고도비만";
      console.log(`계산끝난 값들 : ${JSON.stringify(result)}`)
    return result
  }