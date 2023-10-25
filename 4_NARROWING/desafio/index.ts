type tipo = number | boolean

function reviewUsers(notas?:tipo) {
    if (notas) {
      if(notas === 1){
        console.log(`Sua nota é ${notas}`)
      }else if(notas === 2){
        console.log(`Sua nota é ${notas}`)
      }else if(notas === 3){
        console.log(`Sua nota é ${notas}`)
      }else if(notas === 4){
        console.log(`Sua nota é ${notas}`)
      }else if(notas === 5){
        console.log(`Sua nota é ${notas}`)
      } else {
        console.log('Você adicionou uma nota invalida')
      }
    }else {
        console.log('Você não adiconou nota');
    }
}

reviewUsers()


function obterSiglaEstado(nomeEstado: string): string {
    const estados: { [key: string]: string } = {
        "São Paulo": "SP",
        "Rio de Janeiro": "RJ",
        "Minas Gerais": "MG",
        "Bahia": "BA",
        "Paraná": "PR"
        // Adicione outros estados conforme necessário
    };

    return estados[nomeEstado] || "Estado não encontrado";
}

console.log(obterSiglaEstado('Bahia'));


const newObj = {
    name: 'Junior',
    idade: 18
}

const vari = 'name'
const vari2 = 'idade'

console.log(newObj[vari], newObj[vari2])
