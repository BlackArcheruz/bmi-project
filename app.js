const name = document.querySelector('#name');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const calculateBtn = document.querySelector('.calculate-bmi');
document.getElementById('BMI-form').addEventListener('submit', function(e){
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    setTimeout(calculate, 3000);
    e.preventDefault();
});

calculateBtn.addEventListener('click', function(e){
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    setTimeout(calculate, 3000);
    e.preventDefault();
});

function calculate(e){
    let val = weight.value / (height.value * height.value);
    if(isFinite(name.value)){
        alert('What is Your Name ?');
    }else{
    if(isFinite(val)){
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        const valBmi = `${name.value}'s BMI is ${parseInt(val)}`;
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.className = 'collection-item';
        ul.style = 'border: "none"';
        li.appendChild(document.createTextNode(valBmi));
        ul.appendChild(li);
        setTimeout(function(){
            document.querySelector('.collection-item').remove();
        }, 9000);
        document.getElementById('results').style.display = 'none';
    }else{
        alert('Please Fill Your Weight and Your Height');
    }
    if(val < 14.99){
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        const Bminame = `${name.value} is Underweight`;
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.className = 'collection-item';
        ul.style = 'border: "none"';
        li.appendChild(document.createTextNode(Bminame));
        ul.appendChild(li);
        setTimeout(function(){
            document.querySelector('.collection-item').remove();
        }, 9000);
        document.getElementById('results').style.display = 'none';
    }
    else if(val >= 14.99, val < 25){
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        const Bminame = `${name.value} is Normal`;
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.className = 'collection-item';
        ul.style = 'border: "none"';
        li.appendChild(document.createTextNode(Bminame));
        ul.appendChild(li);
        setTimeout(function(){
            document.querySelector('.collection-item').remove();
        }, 9000);
        document.getElementById('results').style.display = 'none';
    }else if(val >= 25){
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';
        const Bminame = `${name.value} is Overweight`;
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.className = 'collection-item';
        ul.style = 'border: "none"';
        li.appendChild(document.createTextNode(Bminame));
        ul.appendChild(li);
        setTimeout(function(){
            document.querySelector('.collection-item').remove();
        }, 9000);
        document.getElementById('results').style.display = 'none';
    }
    if(val===null){
        alert('Please Fill Your Weight and Your Height');
    }
}
    e.preventDefault();
}
