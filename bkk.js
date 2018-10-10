const picChange1 = ()=>{
    let imgNo = 1;
    imgNo++;
    document.getElementById('pic1').src= `img${imgNo}.jpg`;
    
    if(imgNo===3){
        document.getElementById('pic1').src= 'img1.jpg';
    }

}

const picChange2 = ()=>{
    document.getElementById('pic2').src='img4.jpg';
}

const picChange3 = ()=>{
    document.getElementById('pic3').src='img7.jpg';
}