let imgCont = document.querySelectorAll('.each-img');
let img = document.querySelectorAll('.image');

imgCont.forEach((item, index) => {
    item.addEventListener('mouseover', function() {
        img[index].style.transform ='scale(1.1)';
    });
    item.addEventListener('mouseout', function() {
        img[index].style.transform ='scale(1)';
    });
})
