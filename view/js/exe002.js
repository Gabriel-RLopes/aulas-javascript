function Enviar(){
   let nome = document.getElementById("name");
   let idade = document.getElementById("age");
   let peso = document.getElementById("peso");

   window.alert(nome.value);
   window.alert(idade.value);
   window.alert(peso.value);

   const Cliente = require( "./Exe002_class" );
   const cliente1 = new Cliente( nome, idade, peso );

   window.alert( cliente1.nome   )
   window.alert( cliente1.idade  )
   window.alert( cliente1.peso   )
   window.alert( cliente1.dataCadastro )
 //  console.log( cliente1 )

   document.write( cliente1.nome  + "<br>" )
   document.write( cliente1.idade  + "<br>" )
   document.write( cliente1.peso  + "<br>" )
   document.write( cliente1.dataCadastro )
}
