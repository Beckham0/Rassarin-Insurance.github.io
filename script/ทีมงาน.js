function showPage(pageNumber) {
  const pages = document.querySelectorAll('.page');
  pages.forEach((page, index) => {
    page.style.display = (index === pageNumber - 1) ? 'block' : 'none';
  });
}

// Show page 1 by default
showPage(1);
