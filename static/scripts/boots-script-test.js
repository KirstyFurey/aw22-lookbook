// JavaScript Document// JavaScript Document

const styles = [
    {
      description: 'Alunar Gold Leather Sling Back Heels',
      code: 'ALUNAR GDL',
      img: 'static/images/ALUNAR-GDL.jpg',
      department: 'heels',
    },
    {
      description: 'Alunar Green Leather Sling Back Heels',
      code: 'ALUNAR GNL',
      img: 'static/images/ALUNAR-GNL.jpg',
      department: 'heels',
    },
    {
      description: 'Alunar Silver Leather Sling Back Heels',
      code: 'ALUNAR SLL',
      img: 'static/images/ALUNAR-SLL.jpg',
      department: 'heels',
    },
    {
      description: 'Alunar White Leather Sling Back Heels',
      code: 'ALUNAR WTL',
      img: 'static/images/ALUNAR-WTL.jpg',
      department: 'heels',
    },
    {
      description: 'Soglit Lilac Slipper Sheepskin Slippers',
      code: 'SOGLIT LIM',
      img: 'static/images/SOGLIT-LIM.jpg',
      department: 'slippers',
    },
    {
      description: 'Soglit Multicolour Slipper Sheepskin Slippers',
      code: 'SOGLIT MUL',
      img: 'static/images/SOGLIT-MUL.jpg',
      department: 'slippers',
    },
    {
      description: 'Becks',
      code: 'BECKS TNS',
      img: 'static/images/BECKS-TNS.jpg',
      department: 'boots',
    },
]

const createStyle = () => {
    styles.forEach(style => {
		if (styles.department === 'boots') {
            const styleDiv = createElem('div', 'img-container');
            const getStyleContainer = document.getElementById('style-container');
            getStyleContainer.appendChild(styleDiv);
            const styleImage = createElem('img', 'btn');
            styleImage.classList.add('btn', 'img-style');
            styleImage.src = style.img;
            styleDiv.appendChild(styleImage);
		}
    })
}

// for creating an element
const createElem = (tagName, className) => {
    const element = document.createElement(tagName);
    element.setAttribute('class', className);
    return element;
}

window.onload = () => {
    createStyle();
}














