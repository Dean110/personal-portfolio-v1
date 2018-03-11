describe('Portfolio JavaScript Testing', () => {
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
		describe('when right nav button is clicked', () =>{
			it("replaces 'left-edge' class name with 'left-focus'", () =>{
				const underTest = carouselShift;
				const carouselTestDiv1 = document.createElement('div');
				carouselTestDiv1.className = 'carousel-item left-edge';
				const carouselTestDiv2 = document.createElement('div');
				carouselTestDiv2.className = 'carousel-item';
				document.body.appendChild(carouselTestDiv1);
				document.body.appendChild(carouselTestDiv2);
				const carouselTestDivs = document.body.querySelectorAll('.carousel-item');
				const testButton = document.createElement('div');
				testButton.className = 'right-button';
				underTest(carouselTestDivs, testButton);
				expect(carouselTestDiv1.className).toBe('carousel-item left-focus');
			});
			it("replaces 'left-focus' class name with 'center-focus'", () =>{
				const underTest = carouselShift;
				const carouselTestDiv1 = document.createElement('div');
				carouselTestDiv1.className = 'carousel-item left-focus';
				const carouselTestDiv2 = document.createElement('div');
				carouselTestDiv2.className = 'carousel-item';
				document.body.appendChild(carouselTestDiv1);
				document.body.appendChild(carouselTestDiv2);
				const carouselTestDivs = document.body.querySelectorAll('.carousel-item');
				const testButton = document.createElement('div');
				testButton.className = 'right-button';
				underTest(carouselTestDivs, testButton);
				expect(carouselTestDiv1.className).toBe('carousel-item center-focus');
			})


			// const underTest = carouselShift;
			// var carouselTestDiv1 = document.createElement('div');
			// let carouselTestDiv2 = document.createElement('div');
			// let carouselTestDiv3 = document.createElement('div');
			// carouselTestDiv1.className ='carousel-item';
			// carouselTestDiv2.className ='carousel-item';
			// carouselTestDiv3.className ='carousel-item';
			// document.body.appendChild(carouselTestDiv1)
			// document.body.appendChild(carouselTestDiv2)
			// document.body.appendChild(carouselTestDiv3)
			// let carouselTestDivs=document.body.querySelectorAll('div.carousel-item');
			// let testButton = document.createElement('div');
			// testButton.className = 'right-button';
			
			
			
			// it("replaces 'center-focus' class name with 'right-focus'",()=>{
			// 	carouselTestDiv1.className = 'center-focus';
			// 	underTest(carouselTestDivs, testButton);
			// 	expect(carouselTestDiv1.className).toBe('right-focus');
			// })
			// it("replaces 'right-focus' class name with 'right-edge'", () =>{
			// 	carouselTestDiv1.className = 'right-focus';
			// 	underTest(carouselTestDivs, testButton);
			// 	expect(carouselTestDiv1.className).toBe('right-edge');
			// })
			
		})
	})
})