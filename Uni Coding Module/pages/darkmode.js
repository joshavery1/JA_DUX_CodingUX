// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);}

// previous state
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();}

// click
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode');

  // turn on
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // turn off
  } else {
    disableDarkMode();
  }
});
