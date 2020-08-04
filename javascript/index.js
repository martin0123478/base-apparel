const $form=document.getElementById('form')
const $button=document.getElementById('boton')
const $correo=document.getElementById('email-val')
let Aux;
const errMsg=document.getElementById('error-mesagge')


$form.addEventListener('submit',(event)=>{
  event.preventDefault();
  const data=new FormData($form);
  Aux=data.get('name');
  const a=validar(Aux)
  if(a==true){
    console.log('aceptado')
    // alert('true')
  }else{
    errMsg.style.display='block'
  }

})

function validar(email){
  if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(email)){
		return (true);
	} else {
    return (false);
  }
}
