






// Complete the calculateArea function below.
// It returns a Promise which on success, returns area of the shape, and on failure returns [-1].
let calculateArea = (shape, values) => {
	const rectangleArea = (l, b) => {
		return new Promise((resolve, reject) => {
			if(typeof l === 'number' && typeof b === 'number'){
				resolve(l * b);
			} else {
				reject(' you need numbers to calculate square area')
			}
		})
	}
	const squareArea = (a) => {
		return new Promise((resolve, reject) => {
			if(typeof a === 'number'){
				resolve(a * a);
			} else {
				reject('you need numbers to calculate square area');
			}
		})
	}
	const triangleArea = (b, h) => {
		return new Promise((resolve, reject) => {
			if(typeof b === 'number' && typeof h === 'number'){
				resolve(0.5 * b * h);
			} else {
				reject('you need numbers to calculate triangle area');
			}
		})
	}
	const circleArea = (r) => {
		return new Promise((resolve, reject) => {
			if(typeof r === 'number'){
				resolve(3.14 * r * r);
			} else {
				reject('you need a number to calculate circle area');
			}
		})
	}

	if(typeof shape === 'string'){
		var output = '';
		switch(shape){
			case 'square':{
				squareArea(...values).then((res) => {
					 output = `Area of a square: ${res}`;
				}, (errorMessage) => {
					output = errorMessage;
				});
				break;
			}
			case 'rectangle': {
				rectangleArea(...values).then((res) => {
					output = `Area of a rectangle: ${res}`;
				}, (errorMessage) => {
					output = errorMessage;
				});
				break;
			}
			case 'triangle':{
				triangleArea(...values).then((res) => {
					`Area of a triangle: ${res}`;
				}, (errorMessage) => {
					output = errorMessage;
				});
				break;
			}
			case 'circle': {
				circleArea(...values).then((res) => {
					output = `Area of a circle:  ${res}`;
					
				}, (errorMessage) => {
					return errorMessage ;
				});
				break;
			}
			default: {
				output = 'no area to calculate';
				break;
			}
			return output;
		}
	}
	else{
		return output = 'shape has to be a string';
	}
}
console.log(calculateArea('rectangle', [4, 5]));	
console.log(calculateArea('circle', [5]));

// Complete the generateArea function below.
// It returns a Promise which on success, returns an array of areas of all the shapes and on failure, returns [-1].
let getAreas = (shapes, values_arr) => {
	const areas = [];

		let shape;
		let value = [];
		shape = shapes[0];
		value.push(values_arr[0]) ;

		console.log(value, shape)

		console.log(calculateArea('circle', [3]))
		// console.log(area)
		// console.log(area)
		
		// areas.push(area);
		// console.log(areas, ' get areas');

}
getAreas(['circle', 'square', 'rectangle', 'triangle'],[3, 4, [2, 6], [5, 7]]);