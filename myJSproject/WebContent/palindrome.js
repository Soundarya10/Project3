/**
 * 
 */
//
function palindrome(temp1){
	var temp1 , n1, r,sum;
	
	 temp1=n1;    
    while(n1>0){    
     r=n1%10;  //getting remainder  
     sum=(sum*10)+r;    
     n1=n1/10;    
    }    
    if(temp1==sum)    
     System.out.println("palindrome number ");    
    else    
     System.out.println("not palindrome");  
}