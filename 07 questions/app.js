// ========== traversing the dom =============

// const btns = document.querySelectorAll('.question-btn');
//
// btns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     //looking for a parent of button, so we can toggle class of it
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   })
// });

// ======== using selectors inside the element =========

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');
  //console.log(btn);
  btn.addEventListener('click', () => {

    questions.forEach((item) => {
      if (item !== question){
        item.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text');
  })
});
