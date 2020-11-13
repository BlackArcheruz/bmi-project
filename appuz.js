const name = document.querySelector('#name');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const calculateBtn = document.querySelector('.calculate-bmi');

calculateBtn.addEventListener('click', function(e){
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    setTimeout(calculate, 3000);
    e.preventDefault();
});

function calculate(e){
    let val = weight.value / (height.value * height.value);
    if(isFinite(name.value)){
        alert('Ismingiz nima ?');
    }else{
    if(isFinite(val)){
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        const valBmi = `${name.value}ning BMI ${parseInt(val)}ga teng`;
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.className = 'collection-item';
        ul.style = 'border: "none"';
        li.appendChild(document.createTextNode(valBmi));
        ul.appendChild(li);
        setTimeout(function(){
            document.querySelector('.collection-item').remove();
        }, 3000);
    }else{
        alert('Iltimos Vazningiz va Bo’yingizni to’ldiring');
    }
    if(val < 14.99){
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        const Bminame = `${name.value} siz juda ham ozg’insiz`;
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.className = 'collection-item';
        ul.style = 'border: "none"';
        li.appendChild(document.createTextNode(Bminame));
        ul.appendChild(li);
        setTimeout(function(){
            document.querySelector('.collection-item').remove();
        }, 5000);
    }
    else if(val >= 14.99, val < 25){
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        const Bminame = `${name.value} Normal vaznga egasiz`;
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.className = 'collection-item';
        ul.style = 'border: "none"';
        li.appendChild(document.createTextNode(Bminame));
        ul.appendChild(li);
        setTimeout(function(){
            document.querySelector('.collection-item').remove();
        }, 3000);
    }else if(val >= 25){
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        const Bminame = `${name.value} sizda ortiqcha vazn mavjud, Parhez tuting`;
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.className = 'collection-item';
        ul.style = 'border: "none"';
        li.appendChild(document.createTextNode(Bminame));
        ul.appendChild(li);
        setTimeout(function(){
            document.querySelector('.collection-item').remove();
        }, 3000);
    }
    if(val===null){
        alert('Iltimos Vazningiz va Bo’yingizni to’ldiring');
    }
}
    e.preventDefault();
}