const source = document.querySelector('#svg-template').innerHTML;
const svgTemplate = Handlebars.compile(source);

var contextAll = [
    {
        title: 'ENROLL IN A COURSE',
        text1: 'Certificates and',
        text2: 'badges are attached',
        text3: 'to each completion',
        text4: 'of a course'
    }, 
    {
        title: 'GET ASSESSMENT',
        text1: 'Learn with our amazing',
        text2: 'tutos from all over the',
        text3: 'continent to give you',
        text4: 'the best'
    },
    {
        title: 'GET CERTIFIED',
        text1: 'To get align with your',
        text2: 'development assessment',
        text3: 'guides you through',
        text4: ''
    }
];

const svgContentAll = document.querySelectorAll('.svg-content');

for(let i=0; i<svgContentAll.length; i++) {
    svgContentAll[i].innerHTML = svgTemplate(contextAll[i]);
}

//get the size of the proceed DIV for positionning him
/*(function() {
    const proceedDiv = document.querySelector('#app-proceed-group');
    const hauteur = document.querySelector('.svg-content').height.baseVal.value * 0.15;
    
    proceedDiv.style.bottom = `${hauteur}px`;
    //document.querySelector('#programs').style.paddingTop = `${hauteur}px`;
})();

window.addEventListener('resize', () => {
    const proceedDiv = document.querySelector('#app-proceed-group');
    const hauteur = document.querySelector('.svg-content').height.baseVal.value * 0.15;
    
    proceedDiv.style.bottom = `${hauteur}px`;
    console.log(hauteur);
    //document.querySelector('#programs').style.paddingTop = `${hauteur}px`;
});*/

// see-more-program

const seeBtn = document.querySelector('#see-more-program_mobile');
seeBtn.onclick = () => {
    
    document.querySelectorAll('.mobile_program').forEach((aProgram) => {
        
        aProgram.classList.toggle('d-none');
        aProgram.classList.toggle('d-flex');
    });
};