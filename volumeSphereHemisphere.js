function volumeRatioSphereHemisphere(radius){
    let volumeSphere=((4/3)*3.14*(radius**3));
    let volumeHemisphere=((2/3)*3.14*(radius**3));
    return(`${volumeSphere/volumeHemisphere} : ${(Math.floor(volumeSphere/100))%(Math.floor(volumeHemisphere/100))}`)
}
console.log(volumeRatioSphereHemisphere(15));