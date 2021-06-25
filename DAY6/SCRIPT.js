//Write a JavaScript function to check whether an `input` is an array or not

const a=[1,2,3,4];
const is_array =function(a){
  return Array.isArray(a);
}
console.log(is_array(a))


//Write a JavaScript function to clone an array

const array_Clone=function(a){
  var duparray=a.slice();
  return duparray;
}
console.log(array_Clone([1,2,4,3]));


//Write a JavaScript function to get the first element of an array.
//Passing a parameter 'n' will return the first 'n' elements of the array.

const first=function(a,n){
   if (n==undefined){
    return a[0];
  }
  else if(n<0){
    return []
  } 
  else{
    return a.slice(0,n);
  }
 }
console.log(first([7,6,4,5,6,7,8,9],5));


//Write a simple JavaScript program to join all elements of the following array into a string

const arr2str=function(a){
  return a.toString();
 }
console.log(arr2str(["mammal","elephant"]));


// Write a JavaScript program to find the most frequent item of an array

const mostFreqEle=function(a){
   var dict ={};
  for (i=0;i<a.length;i++){
      if (dict[a[i]]==null){
          dict[a[i]]=1;
          }
      else{
        dict[a[i]]+=1;
          }
    }
  
  var keysSorted = Object.keys(dict).sort(function(a,b){return dict[a]-dict[b]})
  return keysSorted[keysSorted.length - 1];
  
}
console.log(mostFreqEle([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));