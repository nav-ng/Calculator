function buttonClick(val)
{
    document.getElementById("display").value+=val
}
function valueClear()
{
    document.getElementById("display").value=""
}
function equalsTo(){
    var text=document.getElementById("display").value
    var result=eval(text)
    document.getElementById("display").value=result
}
