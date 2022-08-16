$(document).ready(function () {
	const autoreply__item_select = document.querySelector('.autoreply__item--inner');
	const autoreply__item_select_title = autoreply__item_select.querySelector('.autoreply__item--row');
	const autoreply__item_select_labels = autoreply__item_select.querySelectorAll('.autoreply__item--label');
	
	autoreply__item_select_title.addEventListener('click', () => {
		autoreply__item_select.classList.toggle('active')
	});
	
	for (let i = 0; i < autoreply__item_select_labels.length; i++) {
		autoreply__item_select_labels[i].addEventListener('click', (evt) => {
			autoreply__item_select_title.textContent = evt.target.textContent;
			autoreply__item_select.classList.remove('active')
		});
	}
});


$(document).ready(function () {
	const selectSingle1 = document.querySelector('.select1');
	const selectSingle1_title = selectSingle1.querySelector('.select1--title');
	const selectSingle1_labels = selectSingle1.querySelectorAll('.select1--label');
	
	selectSingle1_title.addEventListener('click', () => {
		selectSingle1.classList.toggle('active')
	});

	for (let i = 0; i < selectSingle1_labels.length; i++) {
		selectSingle1_labels[i].addEventListener('click', (evt) => {
			selectSingle1_title.textContent = evt.target.textContent;
			selectSingle1.classList.remove('active')
		});
	}
	
	
	
	
	const selectSingle2 = document.querySelector('.select2');
	const selectSingle2_title = selectSingle2.querySelector('.select2--title');
	const selectSingle2_labels = selectSingle2.querySelectorAll('.select2--label');
	
	selectSingle2_title.addEventListener('click', () => {
		selectSingle2.classList.toggle('active')
	});
	
	for (let i = 0; i < selectSingle2_labels.length; i++) {
		selectSingle2_labels[i].addEventListener('click', (evt) => {
			selectSingle2_title.textContent = evt.target.textContent;
			selectSingle2.classList.remove('active')
		});
	}
	$(document).click( function(e){ 
		const selectSingle2 = document.querySelector('.select2');
		const selectSingle2_title = $( ".select2--title" );
		if ( !selectSingle2_title.is(e.target) && selectSingle2_title.has(e.target).length === 0 ) { 
			selectSingle2.classList.remove('active')
		}
	});
	$(document).click( function(e){ 
		const selectSingle1 = document.querySelector('.select1');
		const selectSingle1_title = $( ".select1--title" );
		if ( !selectSingle1_title.is(e.target) && selectSingle1_title.has(e.target).length === 0 ) { 
			selectSingle1.classList.remove('active')
		}
	});
	
	
	
	
	$(document).ready(function(){
		$('.select1--label-all').click(function(){
			$('.select1--label-left').removeClass('active');
			$('.select1--label-right').removeClass('active');
		});
		$('.select1--label-right').click(function(){
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
			$('.select1--label-left').removeClass('active');
		});
		$('.select1--label-left').click(function(){
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
			$('.select1--label-right').removeClass('active');
		});
	});
});