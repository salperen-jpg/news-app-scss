const toggleBtn = document.querySelector('.toggle-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click', () => {
  modal.classList.toggle('show');
});
closeBtn.addEventListener('click', () => {
  modal.classList.toggle('show');
});
