function updateList() {
  const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
    return (
      Math.abs(a.getBoundingClientRect().top) -
      Math.abs(b.getBoundingClientRect().top)
    );
  });

  console.log(titles);

  document
    .querySelectorAll('.selected-circle')
    .forEach((c) => c.classList.remove('selected-circle'));

  document
    .querySelectorAll('.nav-dot')
    [
      [...document.querySelectorAll('h1, h2')].indexOf(titles[0])
    ].classList.add('selected-circle');
}

updateList();

window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

window.addEventListener('scroll', function () {
    updateList();
  });
