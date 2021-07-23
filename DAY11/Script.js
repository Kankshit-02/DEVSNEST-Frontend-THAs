const questions=[
    {
        "question":"Q.Who was the first Hokage?",
        'options':["Hashirama Senju","Naruto Uzumaki","Tobirama Senju","Hiruzen Sarutobi"]
    }
]

var score=0

function createOption(option,answer=false){
    const optionHolder = document.createElement('div')
    optionHolder.className = "option"

    const button = document.createElement('button')
    button.innerHTML=option;
    button.addEventListener('click',()=>{
        if (answer){
            if(!button.classList.contains("correct")){
                score++
            }
            button.classList.add('correct')
        }
        button.classList.add("wrong")
    })
    optionHolder.append(button)
    return optionHolder
}




questions.forEach((current,number)=>{
    console.log(current,number)
    
    const container=document.createElement("div")
    container.className="container"

    const question=document.createElement("div")
    question.className="question"

    question.innerHTML=`${number+1}. ${current.question}`
    container.append(question)
    const options=document.createElement("div")
    options.className="options"

    const optionArr=[]
    current.options.forEach((option,number)=>{
        if (number==0){
            optionArr.push(createOption(option,true))
        }else{
            optionArr.push(createOption(option))
        }

    })
    optionArr.forEach((option)=>{
        options.append(option)
    })
    container.append(options)

    document.body.append(container)
})