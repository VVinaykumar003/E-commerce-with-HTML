const wrapper = document.querySelector(".sliderwraper");

const menuItems = document.querySelectorAll(".menuItem");
const products = [
  {
    id:1,
    title:"Air Force",
    price:119,
    color:[
      {
        code:"black",
        img:"images/Air-Jordan-PNG-Pic.png" ,
      },
      {
        code:"blue",
        img:"images/AirJoradanPu.jpeg" 
      },
    ],
  },

  {
    id:2,
    title: "Joradan",
    price:149,
    color:[
      {
        code:"lightGray",
        img:"images/lightgrayAirJordan.jpeg"
      },
      {
        code:"Green",
        img:"images/GreenJoradan.jpeg"
      },

    ],
  },
  {
    id:3,
    title:"Blazer",
    price:109,
    color:[
      {
        code:"lightGray",
        img:"images/BLazerGray1.jpeg"
      },
      {
        code:"Black",
        img:"images/BlazerBlack.jpeg"
      }
    ]
  },

  {
    id:4,
    title:"Crater",
    price:109,
    color:[
      {
        code:"Black",
        img:"images/CraterBlack.webp"
      },
      {
        code:"lightGray",
        img:"images/CraterGray.jpg"
      }
    ]
  },

  {
    id:5,
    title:"Hippie",
    price:119,
    color:[
      {
        code:"Black",
        img:"images/hippieBlack.jpeg"
      },
      {
        code:"lightGray",
        img:"images/hippieGray.jpeg"
      }
    ]
  },
]

let choosenProduct = products[0]
const currnetProductImg = document.querySelector(".productImg");
const currnetProductTitle = document.querySelector(".productTitle");
const currnetProductPrice = document.querySelector(".productPrice");
const currnetProductColors = document.querySelectorAll(".color");
const currnetProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item,index)=> {
  item.addEventListener("click" ,()=> {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the chossen product
    choosenProduct = products[index]

    //change text of currentProdcts
    currnetProductTitle.textContent = choosenProduct.title;
    currnetProductTitle.textContent = "$"+choosenProduct.price;
    currnetProductImg.src = choosenProduct.color[0].img;

    //assign new colors
    currnetProductColors.forEach((color,index)=>{
      color.style.backgroundColor = choosenProduct.color[index].code;
    })
    currnetProductTitle.textContent = choosenProduct.title;
    currnetProductTitle.textContent = choosenProduct.title;
  });
});


currnetProductColors.forEach((color,index)=> {
  color.addEventListener("click", ()=>{
    currnetProductImg.src = choosenProduct.color[index].img;
  });
});

currnetProductSizes.forEach((size,index)=> {
  size.addEventListener("click",()=>{
    currnetProductSizes.forEach((size)=>{
      size.style.backgroundColor= "white";
      size.style.color = "black";
    });
    size.style.backgroundColor ="black";
    size.style.color ="white";
  });
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex";
});

close.addEventListener("click",()=>{
  payment.style.display="none";;
})

