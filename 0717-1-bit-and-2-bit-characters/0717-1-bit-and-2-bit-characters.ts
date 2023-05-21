function isOneBitCharacter(bits: number[]): boolean {
    for(let i=0;i<bits.length;){
       if(bits[i]===0){
           if(i===bits.length-1&& bits[i]===0) return true;
           i++;
       }
        else i+=2;
   }
   return false;
}