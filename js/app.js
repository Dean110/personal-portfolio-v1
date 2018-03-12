
function displayMenu(element){
	if(element.length){
		element.forEach(function(item){
			if(item.className.includes('hidden')){
				item.className = item.className.replace('hidden', 'show');
			} else {
				item.className = item.className.replace('show', 'hidden');
			}	
		});
	} else {
		if(element.className.includes('hidden')){
			element.className = element.className.replace('hidden', 'show');
		} else {
			element.className = element.className.replace('show', 'hidden');
		}
	}
};
function carouselShift(carouselItemList, directionButton){
	if(directionButton.className.includes('right-button')){
		// carouselItemList.forEach(function(carouselItem){
		for (let carouselItem of carouselItemList){	
			if (carouselItem.className.includes('left-edge')){
				carouselItem.className = carouselItem.className.replace('left-edge', 'left-focus');
				break;
			} else if(carouselItem.className.includes('left-focus')){
				carouselItem.className= carouselItem.className.replace('left-focus','center-focus');
			} else if(carouselItem.className.includes('center-focus')){
				carouselItem.className= carouselItem.className.replace('center-focus','right-focus');
			} else if(carouselItem.className.includes('right-focus')){
				carouselItem.className = carouselItem.className.replace('right-focus','right-edge');
			}
		}
	}else if(directionButton.className.includes('left-button')){
		//carouselItemList.forEach(function(carouselItem){
		for (let i=carouselItemList.length-1; i>=0; i--){	
			if(carouselItemList[i].className.includes('right-edge')){
				carouselItemList[i].className = carouselItemList[i].className.replace('right-edge','right-focus');
				break;
			} else if(carouselItemList[i].className.includes('right-focus')){
				carouselItemList[i].className = carouselItemList[i].className.replace('right-focus','center-focus');
			} else if(carouselItemList[i].className.includes('center-focus')){
				carouselItemList[i].className = carouselItemList[i].className.replace('center-focus','left-focus');
			} else if(carouselItemList[i].className.includes('left-focus')){
				carouselItemList[i].className = carouselItemList[i].className.replace('left-focus', 'left-edge');
			}
		}
	}
};
function toggleMenu(element) {
	if (element.querySelector('.project-button').textContent=='[+]'){
		element.querySelector('.project-button').textContent='[-]';
	} else {
		element.querySelector('.project-button').textContent='[+]';
	}
	if(element.querySelector('.expandable').className.includes('hidden')){
	element.querySelector('.hidden').className=element.querySelector('.hidden').className.replace('hidden','show');
	}else{
	element.querySelector('.show').className=element.querySelector('.show').className.replace('show','hidden');
	}
}
