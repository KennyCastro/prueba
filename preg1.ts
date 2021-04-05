var vector :number[] = [3, 6, -2, 10, 7, 3];
var maximo:number = 0;

console.log(producto(0));
/*function comp() {} ///funcion vacia para que no afecte a mi process.on

process.stdin.on('data',function(data) {
    vector.push(parseInt(data.toString().trim()));

    if(vector.length < tamaño){
        comp();
    }
    else{
        /*for(var i=0;i<tamaño;i++) {
            process.stdout.write(vector[i]+" ");
        }

        //console.log(vector.length);
        console.log(producto(0));

      

        process.exit();
    }
   
});*/



function producto(pos):number {
    if(pos>=vector.length-1)
        return maximo;
    else{
        if((vector[pos]*vector[pos+1])>maximo)
            maximo=vector[pos]*vector[pos+1];
        return producto(pos+1); 
    }
}