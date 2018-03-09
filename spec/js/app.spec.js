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
	})
})