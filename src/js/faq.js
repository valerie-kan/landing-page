const faqList = document.querySelector('.faq-list');

for (let i = 1; i <= 5; i++) {
  const li = document.createElement('li');
  li.classList.add('faq-list-item');
  li.innerHTML = `
        <div class="question-wrapper">
          <h4 class="question">How do I change my details?</h4>
          <svg class="plus-icon" width="32" height="32">
            <use href="/img/sprite.svg#icon-plus" />
          </svg>
        </div>
        <p class="answer">
          We provide only the best trading software. The trading terminal
          MetaTrader4 is the most popular and convenient platform for access to
          global exchanges. You can work anywhere. All you need is the Internet
          because the necessary trading tools are already collected in one place
          and are available in a couple of clicks. Use only the best and develop
          with us!
        </p>`;

  faqList.appendChild(li);
}

const onQuestionClick = e => {
  const clickedEl = e.target.closest('.question-wrapper');
  if (!clickedEl) return;

  const curItem = clickedEl.closest('.faq-list-item');
  const curAnswer = clickedEl.nextElementSibling;

  const allItems = faqList.querySelectorAll('.faq-list-item');
  allItems.forEach(item => {
    if (item !== curItem) {
      item.classList.remove('open');
      item.querySelector('.answer').classList.remove('open');
    }
  });

  curAnswer.classList.toggle('open');
  curItem.classList.toggle('open');
};

faqList.addEventListener('click', onQuestionClick);
