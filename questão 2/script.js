var procu = document.getElementById('procu').value

function procurar(array, procu) {
    if (array.includes(numero)) {
      return `O número ${procu} existe no array.`;
      document.getElementById('list').innerHTML = `O número ${procu} existe na lista`
    }else{
        return `O número ${procu} existe não no array.`
        document.getElementById('list').innerHTML = `O número ${procu} não existe na lista`
    }
  }
  
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];