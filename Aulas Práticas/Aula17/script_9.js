//Desestruturação de objetos 

const rectangle = {
    width: 20,
    height: 10,
    area :200  
  };
  
  let {width, height, area, perimeter} = rectangle;
  
  console.log(width, height, area, perimeter);

//Desestruturação de objetos 
const rectangle2 = {
    width: 20,
    height: 10,
    area :200  
  };
  
  let {width: w, height : h, area: a, perimeter: p} = rectangle2;
  
  console.log(w, h, a, p);

// Desestruturação de objetos - Destructuring of objects
const rect = {
    width: 20,
    height: 10,
  };
  
  const calculatePerimeter = ({width, height}) => {
    return 2 * (width + height);
  };
  
  console.log(calculatePerimeter(rect));