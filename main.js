//كود قائمة الموبايل

document.getElementById('toggle-menu').onclick = () => {
  document.querySelector('.nav-list').classList.toggle('active');
  document.getElementById('toggle-menu').classList.toggle('active');
}

//كود انكماش رأس الصفحة 

window.addEventListener('scroll',function() {
  const header = document.querySelector('.header-section');
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  }
  else {
    header.classList.remove('shrink');
  }
});

//كود تغيير صورة الدعاية كل 5 ثواني

const imags = ["hero_1.webp","hero_2.webp"];

const imgElement = document.getElementById('slider');

let index = 0;

setInterval(() => {
  imgElement.style.opacity = 0;
  index = (index + 1) % imags.length;

  setTimeout(() => {
    imgElement.src = imags[index];
    imgElement.style.opacity = 1;
    },500);
  },5000);

//كود اخفاء الفورم واظهار الاخر 

const radioChecked = document.querySelectorAll('input[name="chois"]');

const formOne = document.getElementById('complaint');

const formTow = document.getElementById('suggestion');

radioChecked.forEach( radio => {
                      radio.addEventListener("change",() => {
                        if (radio.value === 'form-one') {
                          formOne.style.display = 'flex';
                          formTow.style.display = 'none'
                        }
                        else {
                          formTow.style.display = 'flex';
                          formOne.style.display = 'none'
                        }
                      })
  }
)  

//كود اظهار رسالة للمستخدم بتاكيد نجاح الارسال 


const messageComp = document.getElementById('message-comp');
const messageSugg = document.getElementById('message-sugg');


formOne.onsubmit = (event) => {

  event.preventDefault()

  setTimeout(() => {

    messageComp.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  },1500);
};

formTow.onsubmit = (event) => {

  event.preventDefault()

  setTimeout(() => {
   
    messageSugg.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  },1500);
  
};

function closeComp() {

  messageComp.style.display = 'none';
  document.body.style.overflow = '',
  formOne.reset()
}
function closeSugg() {
  messageSugg.style.display = 'none';
  document.body.style.overflow = '';
  formTow.reset()
}
