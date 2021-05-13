fun main() {

    var cars = mutableListOf<Car>(Car("Toyota","Subaru","blue"),
        Car("Toyota","Masida","red"),
        Car("Toyota","Benz","blue"),
        Car("Toyota","Bmw","black"))
    findColored(cars)


  println(findSize("Judith"))

    var bankAccount = CurrentAccount(792398946197,"nakyagaba jane",67840.110)
    account.deposit(44530.00)
    account.withdraw(6000.00)
    account.see()

    var account2 = SavingsAccount(792398946197,"nakyagaba jane",120.110)
    account2.deposit((44530.00)
    account2.withdraw(6000.00)
    account2.details()
    account2.withdrawals()

}
data class Car(var make:String, var model:String,var color:String)
fun findColored(cars:List<Car>){
     var redCars = mutableListOf<Car>()
    var blueCars = mutableListOf<Car>()
    var others = mutableListOf<Car>()


    var mycolor = cars.forEach { car ->  car.color}
    println(mycolor)
    when (mycolor) {
        "red"  -> redCars.plus(cars)
        " blue" -> blueCars.plus(cars)
        else -> others.plus(cars)
    }
}

fun findSize(word:String):Int{
   return word.length
}
class CurrentAccount(var accNumber: Long, var accName:String, var balance:Double){
    fun deposit(amount: Double){

    }
    fun withdraw(amount: Double){
        balance-=amount
    }
    fun details(){
        println("Account number ${acountNumber} with balance ${balance} id operated by ${accName}")
    }

}
class SavingsAccount(var acountNumber: Long, var balance:Double, var withdrawals:Int){
    fun deposit(amount: Double){
        balance+=amount
    }
    fun withdraw(amount: Double){
        balance-=amount
    }
    fun see(){
        println("Account number ${acountNumber} with balance ${balance} id operated by ${accName}")
    }
    fun withdrawal() {
        if (withdrawals<4 ){
            withdrawals++
        }
    }
}