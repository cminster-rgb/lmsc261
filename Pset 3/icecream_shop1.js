const priceOfIceCream = 9;
let paymentRecieved = prompt("Insert cash please");
let isPaymentEnough = paymentRecieved >= priceOfIceCream;
let tooMuch = paymentRecieved > priceOfIceCream;
if (isPaymentEnough){
    let changeAmount = paymentRecieved - priceOfIceCream;
    if (tooMuch){
    print("Thanks! Enjoy your ice cream!")
    print("your change is $" + changeAmount)
    }else{
        print("Thanks! Enjoy your ice cream!")
    }
} else {
    print("dam you got no money honey")
}