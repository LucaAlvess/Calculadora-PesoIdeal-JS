function calcularPesoIdeal(){
  let inNome = document.getElementById('inNome')
  let inAltura = document.getElementById('inAltura')
  let rbMasculino = document.getElementById('rbMasculino')
  let rbFeminino = document.getElementById('rbFeminino')
  let outInformacao = document.getElementById('outInformacao')

  let nome = inNome.value
  let masculino = rbMasculino.checked
  let feminino = rbFeminino.checked
  let altura = Number(inAltura.value)

  if(nome == '' || (masculino == false && feminino == false)){
    alert('Por favor, escolha um nome e informe o sexo...')
    inNome.focus()
    return
  }
  
  if(altura == 0 || isNaN(altura)){
    alert('Por favor, informe a altura corretamente...')
    inAltura.focus()
    return
  }
  
  if(masculino){
    var pesoIdeal = 22 * Math.pow(altura, 2)

  }else{
    var pesoIdeal = 21 * Math.pow(altura, 2)
  }
  

  outInformacao.textContent = `${nome}, Seu peso ideal é: ${pesoIdeal.toFixed(3)} kg`

}

function limparCampos(){
  location.reload()
  document.getElementById('inNome').focus()
}

  let btCalcularPeso = document.getElementById('btCalcularPeso')
  let btLimparCampos = document.getElementById('btLimparCampos')

  btCalcularPeso.addEventListener('click', calcularPesoIdeal)
  btLimparCampos.addEventListener('click', limparCampos)