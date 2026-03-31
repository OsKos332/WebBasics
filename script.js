// BURGER MENU
const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-list a');


burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});


mobileLinks.forEach(link => {
    link.addEventListener('click', () => {

        burgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});



// COUNTER
const counterEl = document.getElementById('js-counter');
const incrementBtn = document.getElementById('increment-btn');
const resetBtn = document.getElementById('reset-btn');
const messageEl = document.getElementById('js-message');

let count = 0;

incrementBtn.addEventListener('click', () => {
    count++;
    counterEl.innerText = count;
    counterEl.style.transform = "scale(1.2)";
    setTimeout(() => counterEl.style.transform = "scale(1)", 100);

    if (count === 10) messageEl.innerText = "Ого, вже 10 кліків! Ви майстер JS!";
});

// TIMER LOGIC
resetBtn.addEventListener('click', () => {
    count = 0;
    counterEl.innerText = count;


    messageEl.innerText = "Лічильник скинуто.";
    messageEl.style.opacity = "1";


    setTimeout(() => {
        messageEl.innerText = "Натисніть кнопку!";

    }, 1000);
});


// PAGE_UP

const backToTopBtn = document.getElementById('back-to-top');


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});


backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});




// BG AND TIPS ITTERUPTION
const bgGenBtn = document.getElementById('bg-gen-btn');
const quoteBtn = document.getElementById('quote-btn');
const quoteDisplay = document.getElementById('quote-display');
const jsSection = document.getElementById('js');
const defaultBg = document.getElementById('bg-def-btn');

const quotes = [
    "Спочатку виріши задачу, а потім пиши код.",
    "Найкращий код — це той, якого не існує.",
    "Пиши код так, ніби підтримувати його буде психопат зі сокирою.",
    "Помилки — це доказ того, що ти намагаєшся.",
    "Чистий код завжди виглядає так, ніби його написав хтось, кому не байдуже."
];


bgGenBtn.addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    jsSection.style.backgroundColor = randomColor;
    jsSection.style.transition = "background-color 0.5s ease";
});


quoteBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.style.opacity = 0; // Плавне зникнення перед зміною

    setTimeout(() => {
        quoteDisplay.innerText = quotes[randomIndex];
        quoteDisplay.style.opacity = 1;
    }, 300);
});


defaultBg.addEventListener('click', () => {
    jsSection.style.backgroundColor = "#121212";
})






// POP_UP MENU_ SECTION DESCRIPTION

const modalData = {
    'vars': {
        title: "Змінні та Типи",
        text: "JS використовує let та const для оголошення змінних. Основні типи: рядок, число, булеве значення, об'єкт та масив.",
        code: "const user = 'Студент';\nlet age = 20;"
    },
    'funcs': {
        title: "Функції",
        text: "Функції — це блоки коду, які виконують певну задачу. Вони допомагають уникати дублювання.",
        code: "function greet() {\n  return 'Привіт!';\n}"
    },
    'dom': {
        title: "DOM-дерево",
        text: "Document Object Model — це інтерфейс, який представляє HTML як об'єктну структуру, якою можна керувати через JS.",
        code: "document.querySelector('h1').innerText = 'Новий текст';"
    },
    'events': {
        title: "Події",
        text: "JS дозволяє відстежувати дії користувача: кліки, рух миші, натискання клавіш та надсилання форм.",
        code: "btn.addEventListener('click', () => {\n  console.log('Клік!');\n});"
    }
};

const modal = document.getElementById('js-modal');

function openModal(key) {
    const data = modalData[key];
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-text').innerText = data.text;
    document.getElementById('modal-code').innerText = data.code;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}


window.onclick = function (event) {
    if (event.target == modal) closeModal();
}
