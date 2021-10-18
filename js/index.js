let $box = $('.box')
let $name = $('#name')
let $button = $('#btn')

console.log($box.text())
console.log($box.html())
console.log($name.val())

$box.text('Hello Binusian')
$box.css({
    color: 'red',
    backgroundColor: 'blue'
})

$button.on('click', function(){
    //hide -> ilangin
    //delay -> jeda
    //show -> tampilin
    //slide ip -> ilang ke atas
    //slide down -> nampilin ke bawah
    //fadeOut / fadeIn -> memudar
    //fadeToggle 
    //slideToggle 
    $box.hide(1000).delay(2000).show(1000)
    //     $box.text('Hello Binusian')
//     $box.css({
//     color: 'red',
//     backgroundColor: 'blue'
// })
})

$box.on('mouseover', function(){
    $box.css({
        backgroundColor: 'aqua'
    })
})

$box.on('mouseout', function (){
    $box.css({
        backgroundColor: 'white'
    })
})

$name.on('keyup', function(){
    console.log($name.val())
})

