const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMap = document.querySelector('.button-map')
const buttonReduce = document.querySelector('.button-reduce')
const buttonFilter = document.querySelector('.button-filter')



function formatCurrency(value) {
  const newValue = value.toLocaleString('pt-br',
    {
      style: 'currency',
      currency: 'BRL',
    })

  return newValue;

}


function showAll(productsArray) {
  let myLi = ''

  productsArray.forEach((product) => {
    myLi += `
        <li>
            <img src= ${product.src}>
            <p> ${product.name}</p>
            <p class="item-price"> ${formatCurrency(product.price)}</p>
        </li>

    `

  })

  list.innerHTML = myLi

}


function MapItens() {


  const discount = menuOptions.map((products) => ({

    ...products,
    price: products.price * 0.9, // vai aplicar o desconto 

  }))

  showAll(discount)

}



function sumAllItens() {

  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
  list.innerHTML =
    `
    <li>
    
        <p> O total de todos os itens são $ ${formatCurrency(totalValue)}</p>
    
    </li>
    `
}

function filterAllItens() {
  const filterJustVegan = menuOptions.filter(product => product.vegan === true)
  showAll(filterJustVegan)
}




buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonMap.addEventListener('click', MapItens)
buttonReduce.addEventListener('click', sumAllItens)
buttonFilter.addEventListener('click', filterAllItens)