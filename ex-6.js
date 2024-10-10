const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  let a = ""
  if(!carCollection.includes(carBrand)){
    carCollection.push(carBrand)
    a = `new car collection is : ${carCollection}`
  }else{
    a = `${carBrand} has already existed in the ${carCollection.indexOf(carBrand) + 1} position of car collection.`
  }
  return a
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.