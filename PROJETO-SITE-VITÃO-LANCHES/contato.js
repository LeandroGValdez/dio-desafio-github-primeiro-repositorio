function MostrarInformacoes(){
    
   var nomeCompleto = document.getElementById("nomeCompletoId");
   var email = document.getElementById("emailId");
   var telefone = document.getElementById("telefoneId");

   if(nomeCompleto.value == ''){
       alert('Dados enviados com sucesso.');
   }else{
        alert('Nome: ' + nomeCompleto.value + '\n' + 'email: ' + email.value + '\n' + 'telefone: ' + telefone.value);
   }





}