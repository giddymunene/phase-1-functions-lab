// Code your solution in this file!
const hq =42;


function distanceFromHqInBlocks(someValue) {
if (someValue < hq){
  return hq - someValue;}else {  return someValue-hq;}
}
console.log(distanceFromHqInBlocks(50));
  
  function distanceFromHqInFeet(someValue) {
 const distance= distanceFromHqInBlocks(someValue);
 return distance*264;
}
console.log(distanceFromHqInFeet(50))
  
 function distanceTravelledInFeet(start, destination) {
  if (start< destination){
    return (destination-start) *264;
  }else {return  (start - destination)*264}
 } 
console.log(distanceTravelledInFeet(65,44))

 function calculatesFarePrice(start, destination) {
 
  if (distanceTravelledInFeet(start, destination) <= 400){
    return 0;
  }else if (distanceTravelledInFeet(start, destination)  >=400 && distanceTravelledInFeet(start, destination)  <=2000){
    return (distanceTravelledInFeet(start, destination) - 400)*0.02;
  }else if(distanceTravelledInFeet(start, destination) >=2000 && distanceTravelledInFeet(start, destination)   <=2500){
    return 25;
  }
  else {
    return("cannot travel that far")
  }  }
  console.log(calculatesFarePrice(50,58))