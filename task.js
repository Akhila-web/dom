var k=document.getElementById("p");
// let a=document.getElementById("btn")
function b(){
    k.style.backgroundColor="red"
    k.style.color="white"
    k.style.fontsize="60px"
    k.style.borderRadius="20%"
    console.log(k)
}
function c(){
    let images=document.getElementById("div");
    let button= document.getElementById("button2");
    button.style.width="100px"
    button.style.backgroundColor="red"
    images.innerHTML=
    `<img id="i1"src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg"width="200px"><img id="i2"src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-trees-of-yellow-leaves-free-image.jpeg?w=600&quality=80" width="200px"><img id="i3"src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg"width="200px">`

    let image1=document.getElementById("i1")
    image1.style.borderRadius="30px"
    let image2=document.getElementById("i2")
    image2.style.borderRadius="100px"
    let image3=document.getElementById("i3")
    image3.style.borderRadius="50%"
    
}
