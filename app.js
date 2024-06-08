//Images
let Images = document.querySelectorAll('img')
//wrapper
let wrapper = document.getElementById('wrapper')
//imgWrapper
let imgWrapper = document.getElementById('fullImg')

// close
let close = document.querySelector("span")

Images.forEach((img, index)=>{
    img.addEventListener('click', () =>{
        openModal(`img/${index}.JPEG`)
    })
})
close.addEventListener('click', ()=> wrapper.style.display = 'none')
function openModal(pic){
    wrapper.style.display='flex'
    imgWrapper.src =pic
}
