// -------- Секция NEWS Рандомные цифры и числа. Окончания генерируются под сгенерированные цифры и числа. START -------------
const randomCountWrapper = document.querySelector('.random-count-wrapper');
// --------------Контейнер для newsCount и newsComments---------------


const randomCount = randomCountWrapper.querySelectorAll('.random_count');
const randomComments = randomCountWrapper.querySelectorAll('.random_comments');


const timing = setInterval(function() {
    const commentsWord = 'комментари'
    let numArr = [];
       
    randomCount.forEach((element, index) => {
        numArr.push((Math.random() * 100).toFixed())
        element.innerText = numArr[index]
    })
    
    randomComments.forEach((element, index) => {
        let num = numArr[index]
    
        if(num[num.length - 1] === '1') {element.innerText = `${commentsWord}й`}
    
        if(num[num.length - 1] === '2'
        || num[num.length - 1] === '3' 
        || num[num.length - 1] === '4') {element.innerText = `${commentsWord}я`}
    
    
        if(num[num.length - 1] === '5'
        || num[num.length - 1] === '6'
        || num[num.length - 1] === '7'
        || num[num.length - 1] === '8'
        || num[num.length - 1] === '9'
        || num[num.length - 1] === '0') {element.innerText = `${commentsWord}ев`}
    
        if(num[num.length - 2] === '1') {element.innerText = `${commentsWord}ев`}
      })   
}, 2000)
// -------- Секция NEWS Рандомные цифры и числа. Окончания генерируются под сгенерированные цифры и числа. END -------------
