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

//كود اظهار زر متابعة التسجيل وإخفائه

const checkBtn = document.getElementById('btn-box');
const checkBox = document.getElementById('agree');


checkBox.addEventListener("change",() => {

  checkBtn.disabled = !checkBox.checked;
  })

// كود اظهار الفورم الاول

const section = document.querySelector('.register-section');
const formOne = document.getElementById('form-one');

checkBtn.onclick = () => {

  
  section.style.display = 'block';
  formOne.style.display = 'block';
  checkBtn.disabled = false;
  checkBox.addEventListener("click",(even) => {

    if (!checkBox.checked) {

      even.preventDefault()
      
    }
    
})}

// كود اظهار الفورم الثاني 

const btnOne = document.getElementById('form-one-btn');
const formTow = document.getElementById('form-tow');

formOne.onsubmit = (event) => {
  
  event.preventDefault();

  setTimeout( () => {

    formOne.style.opacity = 0;
    formOne.style.display = 'none';

  },1000)

  setTimeout( () => {
    
    formTow.style.display = 'block';
    },1000)
}

// كود اظهار اسم الملف المرفق

const fileInput = document.getElementById('file');
const labell = document.getElementById('labell');

fileInput.onchange = () => {

  const fileName = fileInput.files[0].name;
  labell.textContent = `تم إرفاق (${fileName}) بنجاح`;
}



// كود رسالة ارسال الطلب 

const btnTow = document.getElementById('form-tow-btn');
const alertOverlay = document.querySelector('.alert-overlay');

formTow.onsubmit = (event) => {

  event.preventDefault()

  setTimeout( () => {
    
    alertOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    },2000)
}

// كود اغلاق الصفحة

const alertBtn = document.getElementById('alert-btn');

alertBtn.onclick = () => {
  window.location.replace("index.html");
}