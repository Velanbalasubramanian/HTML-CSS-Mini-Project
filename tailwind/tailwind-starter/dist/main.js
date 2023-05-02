setMode();

function onModeButtonClick() {
  const radioButtons = document.getElementsByName('theme');
  radioButtons.forEach(element => {
    if (element.checked) {
      if (element.value === 'Dark') {
        localStorage.setItem('theme', 'Dark');
      } else if (element.value === 'Light') {
        localStorage.setItem('theme', 'Light');
      } else {
        localStorage.removeItem('theme');
      }
    }
  });

  setMode();
}

function setMode() {
  
  const mode = localStorage.getItem('theme');
  if (mode === null) {
    // Default
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Dark Mode
      document.documentElement.classList.add('dark');
    } else {
      //Light Mode
      document.documentElement.classList.remove('dark');
    }
    document.getElementById('defaultMode').checked = true;
  } else if (mode === 'Dark') {
    // Dark Mode
    document.documentElement.classList.add('dark');
    document.getElementById('darkMode').checked = true;
  } else {
    // Light Mode
    document.documentElement.classList.remove('dark');
    document.getElementById('lightMode').checked = true;
  }

  setClasses();
}

function setClasses() {
  
  const radioButtons = document.getElementsByName('theme');
  radioButtons.forEach(element => {
    labelClasses = element.nextElementSibling.classList;
    if (element.checked) {
      // Active State
      labelClasses.add('bg-purple-600','text-white');
    } else {
      labelClasses.remove('bg-purple-600', 'text-white');
    }
  });
}