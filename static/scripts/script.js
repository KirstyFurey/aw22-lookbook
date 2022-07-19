// JavaScript Document

const styles = [
    {
      description: 'Alunar Gold Leather Sling Back Heels',
      code: 'ALUNAR GDL',
      img: 'static/images/ALUNAR-GDL.jpg'
    },
    {
      description: 'Alunar Green Leather Sling Back Heels',
      code: 'ALUNAR GNL',
      img: 'static/images/ALUNAR-GNL.jpg'
    },
    {
      description: 'Alunar Silver Leather Sling Back Heels',
      code: 'ALUNAR SLL',
      img: 'static/images/ALUNAR-SLL.jpg'
    },
    {
      description: 'Alunar White Leather Sling Back Heels',
      code: 'ALUNAR WTL',
      img: 'static/images/ALUNAR-WTL.jpg'
    },
    {
      description: 'Soglit Lilac Slipper Sheepskin Slippers',
      code: 'SOGLIT LIM',
      img: 'static/images/SOGLIT-LIM.jpg'
    },
    {
      description: 'Soglit Multicolour Slipper Sheepskin Slippers',
      code: 'SOGLIT MUL',
      img: 'static/images/SOGLIT-MUL.jpg'
    },
    {
      description: 'Becks',
      code: 'BECKS TNS',
      img: 'static/images/BECKS-TNS.jpg'
    },
]

const btns = document.getElementsByClassName('btn'); // GET ANY ELEMENT WITH A CLASS OF BTN FOR MODAL
const close = document.getElementsByClassName('close'); // GET ANY ELEMENT WITH CLASS OF CLOSE
const modals = document.getElementsByClassName('modal'); // GET ANY ELEMENT WITH CLASS OF MODAL

//OPEN AND CLOSE MULTIPLE MODALS
[...btns].forEach((btn, ind) => {
  btn.onclick = () => (modals[ind].style.display = 'block');
});

[...close].forEach((close, ind) => {
  close.onclick = () => (modals[ind].style.display = 'none');
});


// CLOSE MODAL ON CLICK OUTSIDE MODAL CONTENT. WORKS BY ADDING THE CLASS 'MODAL' TO THE CONTAINER ELEMENT (THAT HOLDS THE MODAL CONTENT), AND SETTING THIS TO THE FULL SIZE OF THE PAGE, SO CLICKING ANYWHERE OUTSIDE OF THE ELEMENT WITH THE MODAL CONTENT IS CLICKING ON THE ELEMENT WITH THE CLASS OF MODAL
window.onclick = (e) => {
 [...modals].forEach((modals) => {
    if (e.target == modals) {
      modals.style.display = 'none';
    }
  });
};
/*
const createStyle = () => {
	let i;
	for (i = 0; i < styles.length; i++) {
        const styleDiv = document.createElement('div');
        styleDiv.setAttribute('class', 'style');
        const getStyleContainer = document.getElementById('style-container');
        getStyleContainer.appendChild(styleDiv);
		styleDiv.style.width = ('200px');
		styleDiv.style.height = ('260px');
        styleDiv.style.margin = ('20px');
        styleDiv.style.display = ('flex');
        styleDiv.style.justifyContent = ('center');
        styleDiv.style.alignItems = ('center');
		styleDiv.style.backgroundColor = ('#f7f7f7');
		const styleImage = document.createElement('img');
		styleDiv.appendChild(styleImage);
		styleImage.src = styles[i].img;
		styleImage.style.width = ('200px');
		styleImage.style.height = ('260px');
		styleImage.style.objectFit = ('contain');
	}
}

window.onload = () => {
	createStyle();
}
*/

const createStyle = () => {
  styles.forEach(style => {
    const styleDiv = createElem("div", "style"); // calling createElem function
    const getStyleContainer = document.getElementById('style-container');
    getStyleContainer.appendChild(styleDiv);
    const styleImage = createElem("img", "myImg-style"); // calling createElem function
    styleImage.src = style.img; // you were missing this it says that set src attribute to style.img(I have used unsplash images) for your code it's your path
    styleDiv.appendChild(styleImage);
   // const myTitle = createElem("h1", "my-title");
    //myTitle.innerHTML = style.code;
    //styleDiv.appendChild(myTitle);
    //const myDescription = createElem("p", "my-description");
    //myDescription.innerHTML = style.description;
    //styleDiv.appendChild(myDescription);
  })
}
// for creating an elemnt
function createElem(tagName, className) {
  const element = document.createElement(tagName);
  element.setAttribute('class', className);
  return element;
}


window.onload = () => {
  createStyle();
}


