const flatten = function(arr){
  if(arr.length === 0) {
    return [];
  }
  if (Array.isArray(arr[0])) {
    return flatten(arr[0]).concat(flatten(arr.slice(1)));
  }
  else {
    return [arr[0]].concat(flatten(arr.slice(1)));
  }

}