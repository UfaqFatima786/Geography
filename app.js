  const points = document.querySelectorAll('.fact-point');
  const factBox = document.getElementById('fact-box');

  points.forEach(point => {
    point.addEventListener('mouseenter', () => {
      factBox.style.display = 'block';
      factBox.innerText = point.getAttribute('data-fact');
    });

    point.addEventListener('mouseleave', () => {
      factBox.style.display = 'none';
    });
  });
