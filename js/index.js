var dateNum=prompt('Ingrese datos');


function cipher(txt,num){

    var letter="abcdefghijklmnopqrstuvwxyz";// abecedario
    var txt=txt.toLowerCase();
    for(var i=0;i<txt.length;i++);
    var num = num%letter.length;  // n=33%26..para sacar cod ascii
    num = num<0?letter.length+num:num    // si num
    var resletter='';

    for(var i =0;i<txt.length;i++){

       var newletter=letter.charAt((letter.indexOf(txt.charAt(i))+num)%letter.length)
        resletter+=newletter.length==0?' ':newletter
    }
    return resletter
}
 console.log(cipher('A',3))
