
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
function carouselShift(carouselItemList, direction){
	carouselItemList.forEach(function(carouselItem){
		if (carouselItem.className.includes('left-edge')){
			carouselItem.className = carouselItem.className.replace('left-edge', 'left-focus');
		} else if(carouselItem.className.includes('left-focus')){
			carouselItem.className= carouselItem.className.replace('left-focus','center-focus');
		} else if(carouselItem.className == 'center-focus'){
			carouselItem.className = 'right-focus';
		} else if(carouselItem.className == 'right-focus'){
			carouselItem.className = 'right-edge';
		}
	})
};