$(document).ready(function() {
	$('a[href^="#"]').on('click', function(event) {
	  var target = $(this.getAttribute('href'));
	  if (target.length) {
		event.preventDefault();
		$('html, body').stop().animate({
		  scrollTop: target.offset().top
		}, 1000);
	  }
	});
  
	/* Add hover effect to skills list items */
	const skillsListItems = document.querySelectorAll('li');
	skillsListItems.forEach(item => {
	  item.addEventListener('mouseover', () => {
		item.style.backgroundColor = '#eee';
	  });
  
	  item.addEventListener('mouseout', () => {
		item.style.backgroundColor = 'transparent';
	  });
	});
  
	$('.arrow-link a').on('click', function(event) {
	  event.preventDefault();
	  var target = $(this).attr('href');
	  $('html, body').animate({
		scrollTop: $(target).offset().top
	  }, 1000);
	});
  });
  