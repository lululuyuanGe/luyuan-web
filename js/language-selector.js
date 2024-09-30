function toggleDropdown() {
  const dropdownOptions = document.getElementById('dropdown-options');

  // Toggle the 'show' class
  if (dropdownOptions.classList.contains('show')) {
      dropdownOptions.classList.remove('show');
  } else {
      dropdownOptions.classList.add('show');
  }
}


function selectLanguage(language) {
  const currentFlag = document.getElementById('current-flag');
  const currentLanguage = document.getElementById('current-language');

  if (language === 'en') {
      window.location.href = 'index-en.html';
  } else if (language === 'zh') {
      window.location.href = 'index-zh.html';
  }

  // Hide the dropdown after selection
  document.getElementById('dropdown-options').style.display = 'none';

  // Close the dropdown if clicking outside of it
  document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.custom-dropdown');
    if (!dropdown.contains(event.target)) {
        document.getElementById('dropdown-options').style.display = 'none';
    }
})}
