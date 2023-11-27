function fun(ele)
{
    document.getElementById("txt").value+=ele.value;
}
function cal()
{
    var exp;
    exp = document.getElementById("txt").value;
    ans = eval(exp);
    document.getElementById("txt").value=ans;
}

