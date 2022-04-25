
let op=0,n=0,num1=0,num2=0;
    $('.btn').on('click', function(e) {   
             //console.log( e.target.innerHTML);
             n=parseInt(e.target.innerHTML);
             display(n);
                });
function display(num)
{
    if(isNaN(op))
    {
        num2=num2*10+num;
    $('.item-2 span').text(num1+op+num2);
    operation();
    }
    else
    {
    num1=num1*10+num;
    $('.item-2 span').text(num1);
    }
    console.log();
}
$('.operator').on('click', function(p){
    op=p.target.innerHTML;
    $('.item-2 span').text(num1+op);
})
function operation()
{
    $('.equal').on('click',function()
    {
    switch(op)
    {
        case '+':
            $('.item-2 span').text(num1+num2);
            break;
        case '-':
            $('.item-2 span').text(num1-num2);
            break;
        case '*':
                $('.item-2 span').text(num1*num2);
                break; 
      case '/':
            $('.item-2 span').text(num1/num2);
            break;   
    }
    } );
}


