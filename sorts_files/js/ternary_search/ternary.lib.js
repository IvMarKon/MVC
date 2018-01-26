function ternarySearch(arr,srch){
  //take the first element of part and the last
	var low = 0;
	var high = arr.length-1;

  //if in part still one or more elemnts
	while(low<=high){

    //break part on three parts and add two more control points on part
		var left = low + Math.floor((high - low)/3);
		var right = high - Math.floor((high- low)/3);

    //is it equal left
		if(arr[left]==srch){
      return left;

    //is it equal right
		}else if(arr[right]==srch){
      return right;
      
    //if left much more bigger, we work with left part
		}else if(arr[left]>srch){
      high = left - 1;
      
    //if right much more less, we work with right part  
		}else if(arr[right]<srch){
			low = right+1;
		}else{

    //else we put central part on one point right  
			low = left + 1;
			high = right - 1;
		}
	}

	return null;
}
