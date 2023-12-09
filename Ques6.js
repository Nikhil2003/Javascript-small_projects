/* Write a JavaScript program that accepts a string as input and swaps the case of each character. 
For example if you input'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
 */
const str="The Quick Brown Fox"
const str1=[];
for(let i=0; i<str.length;i++)
{
    if(str[i]>'A'&& str[i]<'Z')
    {
        ch=str[i].toLowerCase();
        str1.push(ch);
    }
    else
    if(str[i]>'a'&& str[i]<'z')
    {
        ch=str[i].toUpperCase();
        str1.push(ch);
    }
    else
    {
        str1.push(str[i]);
    }
}
console.log(str1.join(''));