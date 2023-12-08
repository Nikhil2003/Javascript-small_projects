let arr = '025468';
l=arr.length;
l=l-1;
arr.toString();
c=0;
while(c<=l)
{
    if(arr[c]%2==0)
    {
        if(arr[c+1]%2==0)
        {
            console.log(arr[c])
            console.log('-')
            console.log(arr[c+1])
            
        }
        
    }
    else
      console.log(arr[c])
    
      c=c+1;
}
