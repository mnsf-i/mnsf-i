const skillsList = document.querySelectorAll('.skills li');

skillsList.forEach((skill) => {
  skill.addEventListener('mouseover', () => {
    skill.classList.toggle('hover');
  });
  skill.addEventListener('mouseout', () => {
    skill.classList.toggle('hover');
  });
});