const cards=["Guadalupe", "Ollie", "Aki"]
const event="Birhday"
const messages=[]
function writeCards(cards,event){
    for(let i=0;i<cards.length;i++){
        const message=`Thank you, ${cards[i]}, for the wonderful ${event} gift!`
        messages.push(message)
    }
    return messages
}
console.log(writeCards)

function countDown(number){
    while(number>=0){
        console.log(number);
        number--;

    }

}
countDown(10)