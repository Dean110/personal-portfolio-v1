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