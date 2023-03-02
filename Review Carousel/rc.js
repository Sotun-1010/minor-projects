let rightArrow = document.querySelector('#chevron-right');
let leftArrow = document.querySelector('#chevron-left');
let Name = document.querySelector('#name');
let Title = document.querySelector('#title')
let image = document.querySelector('#image')


const nameList = ['Matthew Vogt', 'Sasha Banks', 'Joshua Antonio', 'Sarah Banks' ]

const picLinks = ['medium-shot-happy-man-smiling.jpg','portrait-beautiful-african-woman-sitting-sofa-drinking-tea-isolated-home-interior.jpg', 'people-lifestyle.jpg', 'young-attractive-african-girl-glasses-smiling-sitting-table-white-wall-future-fashion-icon-graphic-designer.jpg']

const jobDescriptions = ['Data Scientist', 'Gardener', 'Banker', 'Civil Engineer']

let index = 0;
rightArrow.addEventListener('click', function(){
    index++;
    let setJob = jobDescriptions[index];
    let setName = nameList[index];
    let setPicLink = picLinks[index]
    
    Title.innerHTML = setJob;
    Name.innerHTML = setName;
    image.src = setPicLink;

    if (index == nameList.length) {
        index = 0;
        Title.innerHTML =jobDescriptions[index];
        Name.innerHTML = nameList[index];
        image.src = picLinks[index]
    };
});

leftArrow.addEventListener('click', function(){
    index--;
    let setJob = jobDescriptions[index];
    let setName = nameList[index];
    let setPicLink = picLinks[index]
    
    Title.innerHTML = setJob;
    Name.innerHTML = setName;
    image.src = setPicLink;

    if (index == -1) {
        index = nameList.length - 1;
        Title.innerHTML =jobDescriptions[index];
        Name.innerHTML = nameList[index];
        image.src = picLinks[index]
    };
});