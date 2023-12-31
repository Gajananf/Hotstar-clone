let movies =[
    {
        name : "falcon and the winter soldier",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et excepturi vero hic, quidem commodi non iure inventore, ab aliquam explicabo officia possimus nobis ea vitae, odio mollitia. Voluptate, ipsum porro. Vel ipsum cum doloremque blanditiis nesciunt placeat voluptatibus sequi!",
        image:"images-20230715T160040Z-001/images/slider 2.PNG"
    },
    {
        name : "Loki",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et excepturi vero hic, quidem commodi non iure inventore, ab aliquam explicabo officia possimus nobis ea vitae, odio mollitia. Voluptate, ipsum porro. Vel ipsum cum doloremque blanditiis nesciunt placeat voluptatibus sequi!",
        image:"images-20230715T160040Z-001/images/slider 1.PNG"
    },
    {
        name : "Wanda vision",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et excepturi vero hic, quidem commodi non iure inventore, ab aliquam explicabo officia possimus nobis ea vitae, odio mollitia. Voluptate, ipsum porro. Vel ipsum cum doloremque blanditiis nesciunt placeat voluptatibus sequi!",
        image:"images-20230715T160040Z-001/images/slider 3.PNG"
    },
    {
        name : "raya and the last dragon",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et excepturi vero hic, quidem commodi non iure inventore, ab aliquam explicabo officia possimus nobis ea vitae, odio mollitia. Voluptate, ipsum porro. Vel ipsum cum doloremque blanditiis nesciunt placeat voluptatibus sequi!",
        image:"images-20230715T160040Z-001/images/slider 4.PNG"
    },
    {
        name : "luca",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et excepturi vero hic, quidem commodi non iure inventore, ab aliquam explicabo officia possimus nobis ea vitae, odio mollitia. Voluptate, ipsum porro. Vel ipsum cum doloremque blanditiis nesciunt placeat voluptatibus sequi!",
        image:"images-20230715T160040Z-001/images/slider 5.PNG"
    },
];
const carousel =document.querySelector('.carousel');
let sliders=[];

let slideIndex=0;   //track current slide

const createSlide =() => {
    if (slideIndex>=movies.length){
        slideIndex=0;
    }
    
    //create dom element
    let slide=document.createElement('div');
    var imgElement=document.createElement('img');
    let content =document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');

    //attaching alll elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up Images
    imgElement.src=movies[slideIndex].image;
    slideIndex++

    //setting element classname
    slide.className='slider';
    content.className='slide-content';
    h1.className='movie-title';
    p.className='movie-des';


    sliders.push(slide);
    if(sliders.length)
    {
        sliders[0].style.marginLeft =`calc(-${100 *  (sliders.length -2)}% -  ${30 * (sliders.length-2)}px)`;
    }
}

for(let i=0;i<3;i++){
    createSlide();
}

setInterval(()=>{
    createSlide();
},3000);

const videocards = [...document.querySelectorAll(".video-card")];
videocards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerwidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerwidth - 200;
  });
  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerwidth + 200;
  });
});
