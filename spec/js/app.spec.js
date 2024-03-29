describe('Portfolio JavaScript Testing', () => {
	describe('a method that expands and collapses an element', () => {
		const underTest= toggleMenu;
		const testDiv = document.createElement('div');
		const testButton = document.createElement('div');
		const testExpandableDiv = document.createElement('div');
		
		it('changes the content of the button from \'[+]\' to \'[-]\'', () => {
			const testButtonText = document.createTextNode('[+]');
			testButton.appendChild(testButtonText);
			testButton.className = 'project-button';
			testDiv.appendChild(testButton);
			document.body.appendChild(testDiv);
			testExpandableDiv.className = 'expandable show';
			testDiv.appendChild(testExpandableDiv);
			
			underTest(testDiv);
			
			let result=document.querySelector('.project-button').textContent;
			expect(result).toBe('[-]');
		})
		it('changes the content of the button from \'[-]\' to \'[+]\'', () => {
			const testButtonText = document.createTextNode('[-]');
			testButton.appendChild(testButtonText);
			testButton.className = 'project-button';
			testDiv.appendChild(testButton);
			document.body.appendChild(testDiv);
			testExpandableDiv.className = 'expandable show';
			testDiv.appendChild(testExpandableDiv);
			
			underTest(testDiv);
			
			let result=document.querySelector('.project-button').textContent;
			expect(result).toBe('[+]');
		})
		it("toggles the class name of the expandble element from 'hidden' to 'show' while maintaining other class names", () => {
			const testButtonText = document.createTextNode('[-]');
			testButton.appendChild(testButtonText);
			testDiv.appendChild(testExpandableDiv);
			testDiv.appendChild(testButton);
			document.body.appendChild(testDiv);
			testButton.className = 'project-button';
			testExpandableDiv.className = 'expandable hidden';
			underTest(testDiv);
			let result = testExpandableDiv.className;
			expect(result).toBe('expandable show');
		})
		it("toggles the class name of the expandble element from 'hidden' to 'show' while maintaining other class names", () =>{
			const testButtonText = document.createTextNode('[-]');
			testButton.appendChild(testButtonText);
			testDiv.appendChild(testExpandableDiv);
			testDiv.appendChild(testButton);
			document.body.appendChild(testDiv);
			testButton.className = 'project-button';
			testExpandableDiv.className = 'expandable show';
			
			underTest(testDiv);
			let result = testExpandableDiv.className;
			expect(result).toBe('expandable hidden');
		})
		it("toggles the class names without affecting other elements", () => {
			const testDiv1 = document.createElement('div');
			const testButton1 = document.createElement('div');
			const testExpandableDiv1 = document.createElement('div');
			const testDiv2 = document.createElement('div');
			const testExpandableDiv2 = document.createElement('div');
			const testButtonText = document.createTextNode('[-]');
			testButton1.appendChild(testButtonText);
			testDiv1.appendChild(testExpandableDiv1);
			testDiv1.appendChild(testButton1);
			document.body.appendChild(testDiv1);
			testButton1.className = 'project-button';
			testExpandableDiv1.className = 'expandable show';
			testDiv2.appendChild(testExpandableDiv2);
			document.body.appendChild(testDiv2);
			testExpandableDiv2.className = 'expandable show';
			underTest(testDiv1);
			let result1 = testExpandableDiv1.className;
			let result2 = testExpandableDiv2.className;
			expect(result1).toBe('expandable hidden');
			expect(result2).toBe('expandable show');
			
		})
		
	})
	describe('a method that changes an element\'s visability', () => {
		it('changes an element class from hidden to show', () =>{
			//Arrange
			const underTest=displayMenu;
			let testDiv =document.createElement('div');
			testDiv.className += 'hidden';
			//Act
			underTest(testDiv);
			//Assert
			let changedClassName = testDiv.className;
			expect(changedClassName).toBe('show');
		})
		it('replaces hidden with show while keeping other classes', () =>{
			const underTest=displayMenu;
			let testDiv = document.createElement('div');
			testDiv.className +='hidden ';
			testDiv.className +='foo';
			
			underTest(testDiv);

			let changedClassName = testDiv.className;
			expect(changedClassName).toBe('show foo');
		})
		it('replaces show with hidden while keeping other classes', () =>{
			const underTest=displayMenu;
			let testDiv = document.createElement('div');
			testDiv.className +='show ';
			testDiv.className +='foo';
			
			underTest(testDiv);

			let changedClassName = testDiv.className;
			expect(changedClassName).toBe('hidden foo');
		})
		it('replaces show with hidden in all elements in a nodelist', ()=>{
			const underTest=displayMenu;
			let testDiv1 = document.createElement('div');
			testDiv1.className +='show ';
			testDiv1.className +='foo';
			let testDiv2 = document.createElement('div');
			testDiv2.className +='show ';
			testDiv2.className +='foo';
			document.body.appendChild(testDiv1);
			document.body.appendChild(testDiv2);
			testDivs= document.body.querySelectorAll('div.show');
			
			underTest(testDivs);

			expect(testDiv1.className).toBe('hidden foo');
			expect(testDiv2.className).toBe('hidden foo');		
		})
	})
	describe('a carousel function that takes a nodelist and', () =>{
		const underTest = carouselShift;
		const carouselTestDiv1 = document.createElement('div');
		const carouselTestDiv2 = document.createElement('div');
		const testButton = document.createElement('div');
		
		describe('when right nav button is clicked', () =>{
			
			
			it("replaces 'left-edge' class name with 'left-focus'", () =>{
				carouselTestDiv1.className = 'carousel-item left-edge';
				carouselTestDiv2.className = 'carousel-item';
				testButton.className = 'right-button';
				document.body.appendChild(carouselTestDiv1);
				document.body.appendChild(carouselTestDiv2);
				const carouselTestDivs = document.body.querySelectorAll('.carousel-item');
				
				underTest(carouselTestDivs, testButton);
				
				expect(carouselTestDiv1.className).toBe('carousel-item left-focus');
			});
			
			it("replaces 'left-focus' class name with 'center-focus'", () =>{
				carouselTestDiv1.className = 'carousel-item left-focus';
				carouselTestDiv2.className = 'carousel-item';
				testButton.className = 'right-button';
				document.body.appendChild(carouselTestDiv1);
				document.body.appendChild(carouselTestDiv2);
				const carouselTestDivs = document.body.querySelectorAll('.carousel-item');
			
				underTest(carouselTestDivs, testButton);
			
				expect(carouselTestDiv1.className).toBe('carousel-item center-focus');
			})

			it("replaces 'center-focus' class name with 'right-focus'",()=>{
				carouselTestDiv1.className = 'carousel-item center-focus';
				carouselTestDiv2.className = 'carousel-item';
				testButton.className = 'right-button';
				document.body.appendChild(carouselTestDiv1);
				document.body.appendChild(carouselTestDiv2);
				const carouselTestDivs = document.body.querySelectorAll('.carousel-item');
			
				underTest(carouselTestDivs, testButton);
			
				expect(carouselTestDiv1.className).toBe('carousel-item right-focus');
			})
			it("replaces 'right-focus' class name with 'right-edge'", () =>{
				carouselTestDiv1.className = 'carousel-item right-focus';
				carouselTestDiv2.className = 'carousel-item';
				testButton.className = 'right-button';
				document.body.appendChild(carouselTestDiv1);
				document.body.appendChild(carouselTestDiv2);
				const carouselTestDivs = document.body.querySelectorAll('.carousel-item');
			
				underTest(carouselTestDivs, testButton);
			
				expect(carouselTestDiv1.className).toBe('carousel-item right-edge');
			})
			it("shifts class names to the right on four node list elements", () =>{
				const carouselTestDiv3 = document.createElement('div');
				const carouselTestDiv4 = document.createElement('div');
				carouselTestDiv1.className = 'carousel-item right-focus';
				carouselTestDiv2.className = 'carousel-item center-focus';
				carouselTestDiv3.className = 'carousel-item left-focus';
				carouselTestDiv4.className = 'carousel-item left-edge';
				testButton.className = 'right-button';
				document.body.appendChild(carouselTestDiv1);
				document.body.appendChild(carouselTestDiv2);
				document.body.appendChild(carouselTestDiv3);
				document.body.appendChild(carouselTestDiv4);
				const carouselTestDivs = document.body.querySelectorAll('.carousel-item');
			
				underTest(carouselTestDivs, testButton);
			
				expect(carouselTestDiv1.className).toBe('carousel-item right-edge');
				expect(carouselTestDiv2.className).toBe('carousel-item right-focus');
				expect(carouselTestDiv3.className).toBe('carousel-item center-focus');
				expect(carouselTestDiv4.className).toBe('carousel-item left-focus');
			})
			it("takes the first element of two with a 'left-edge' class name and shifts only the first element", () =>{
				carouselTestDiv1.className = 'carousel-item left-edge';
				carouselTestDiv2.className = 'carousel-item left-edge';
				testButton.className = 'right-button';
				document.body.appendChild(carouselTestDiv1);
				document.body.appendChild(carouselTestDiv2);
				const carouselTestDivs = document.body.querySelectorAll('.carousel-item');
				
				underTest(carouselTestDivs, testButton);
				
				expect(carouselTestDivs[0].className).toBe('carousel-item left-focus');
				expect(carouselTestDivs[1].className).toBe('carousel-item left-edge');
			})
			
		})
		describe('when left nav button is clicked', () =>{
			it("replaces 'right-edge' class name with 'right-focus'", () =>{
				testButton.className = 'left-button';
				carouselTestDiv1.className = 'carousel-item right-edge';
				carouselTestDiv2.className = 'carousel-item';
				document.body.appendChild(carouselTestDiv1);
				document.body.appendChild(carouselTestDiv2);
				const carouselTestDivs = document.body.querySelectorAll('.carousel-item');
			
				underTest(carouselTestDivs, testButton);
			
				expect(carouselTestDiv1.className).toBe('carousel-item right-focus');
			})
			it("replaces 'right-focus' class name with 'center-focus'", () =>{
				testButton.className = 'left-button';
				carouselTestDiv1.className = 'carousel-item right-focus';
				carouselTestDiv2.className = 'carousel-item';
				document.body.appendChild(carouselTestDiv1);
				document.body.appendChild(carouselTestDiv2);
				const carouselTestDivs = document.body.querySelectorAll('.carousel-item');
			
				underTest(carouselTestDivs, testButton);
			
				expect(carouselTestDiv1.className).toBe('carousel-item center-focus');
			})
			it("replaces 'center-focus' class name with 'left-focus'", () =>{
				testButton.className = 'left-button';
				carouselTestDiv1.className = 'carousel-item center-focus';
				carouselTestDiv2.className = 'carousel-item';
				document.body.appendChild(carouselTestDiv1);
				document.body.appendChild(carouselTestDiv2);
				const carouselTestDivs = document.body.querySelectorAll('.carousel-item');
			
				underTest(carouselTestDivs, testButton);
			
				expect(carouselTestDiv1.className).toBe('carousel-item left-focus');
			})
			it("replaces 'left-focus' class name with 'left-edge'", () =>{
				testButton.className = 'left-button';
				carouselTestDiv1.className = 'carousel-item left-focus';
				carouselTestDiv2.className = 'carousel-item';
				document.body.appendChild(carouselTestDiv1);
				document.body.appendChild(carouselTestDiv2);
				const carouselTestDivs = document.body.querySelectorAll('.carousel-item');
			
				underTest(carouselTestDivs, testButton);
			
				expect(carouselTestDiv1.className).toBe('carousel-item left-edge');
			})
			it("shifts class names to the left on four node list elements", () =>{
				const carouselTestDiv3 = document.createElement('div');
				const carouselTestDiv4 = document.createElement('div');
				carouselTestDiv1.className = 'carousel-item right-edge';
				carouselTestDiv2.className = 'carousel-item right-focus';
				carouselTestDiv3.className = 'carousel-item center-focus';
				carouselTestDiv4.className = 'carousel-item left-focus';
				testButton.className = 'left-button';
				document.body.appendChild(carouselTestDiv1);
				document.body.appendChild(carouselTestDiv2);
				document.body.appendChild(carouselTestDiv3);
				document.body.appendChild(carouselTestDiv4);
				const carouselTestDivs = document.body.querySelectorAll('.carousel-item');
			
				underTest(carouselTestDivs, testButton);
			
				expect(carouselTestDiv1.className).toBe('carousel-item right-focus');
				expect(carouselTestDiv2.className).toBe('carousel-item center-focus');
				expect(carouselTestDiv3.className).toBe('carousel-item left-focus');
				expect(carouselTestDiv4.className).toBe('carousel-item left-edge');
			})
			it("takes the first element of two with a 'right-edge' class name and shifts only the last element", () =>{
				carouselTestDiv1.className = 'carousel-item right-edge';
				carouselTestDiv2.className = 'carousel-item right-edge';
				testButton.className = 'left-button';
				document.body.appendChild(carouselTestDiv1);
				document.body.appendChild(carouselTestDiv2);
				const carouselTestDivs = document.body.querySelectorAll('.carousel-item');
				
				underTest(carouselTestDivs, testButton);
				
				expect(carouselTestDivs[1].className).toBe('carousel-item right-focus');
				expect(carouselTestDivs[0].className).toBe('carousel-item right-edge');
			})
		})
	})
})