function changeItem() {
    const img = document.getElementById("myImage");
    
    if (img.src.includes("download.jpg"))
    {
        img.src = "bmw.avif";
    }
    else{
        img.src = "download.jpg";
    }
    
}