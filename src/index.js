//Create Variables that will be used often, this helps keep code cleaner and more refined.
const balance = document.getElementById('balance')
const money_plus = document.getElementById('money-plus')
const money_minus = document.getElementById('money_minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

//LocalStorage is for Transactions, balance, incoming, outgoing.
const localStorageTransactions = 
JSON.parse(localStorageTransactions.getItem('transactions')) //JSON.parse takes any/all JSON (Javascript Object Notation) and converts it into an object.
let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions: []
//Let var transactions equal the localstorage transaction value, if inequal to null, show array ???

//Add Transaction
function addTransaction(e) {
    e.preventDefault()
    if (text.nodeValue.trim() === '' || amount.value.trim() === '') { //If input value is empty, alert user (trim whitespace before testing)
        alert('Yeah nah bro, you did it wrong, try again')
    } else {
        const transaction = {
            id: generateId(),
            text: text.value,
            amount: +amount.value //The PLUS converts the string to a number
        } 
        transactions.push(transaction)
    } 
}

//Generate ID
function generateId() {
    return Math.floor(Math.random() * 1000000)
}

//Add transaction to list
function addTransactionList(transaction) {
    const sign = transaction < 0 ? '-' : '+' //plus or minus
    const item = document.createElement('li')

    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')  //add class based on value of amount
    // item.innerHTML = 
    // $(transaction.text) <span>$(sign)$(Math.abs(transaction.amount))</span>

    //This is where the class became unfollowable, gg
}