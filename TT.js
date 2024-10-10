// โจทย์ : เรามี Array [ 9,1,2,3,4,5,6 ] และเราต้องทำอย่างไร 
// - ถ้าอยากให้เลขใน Array นี้มีเฉพาะเลขคู่
// - หากเลขไหนที่เป็นเลขคี่ใน Array ให้ทำการเปลี่ยนเลขค่ี่เป็นเลขคู่
// คำตอบที่ควรจะเป็น : [10,2,2,4,4,6,6] 

let numbers = [ 9,1,2,3,4,5,6 ]

function onlyEvenNumber (num) {
    // for(let i = 0;i<num.length;i++ ){
    //     if(num[i]%2===1){
    //         num[i]+=1;
    //     }
    //     console.log(num[i]);
    // }
    let ans = num.map(ans => ans %2===0 ? ans:ans+=1)
    console.log(ans)
    //.filter(ans => ans%2 === 1)

}

let result = onlyEvenNumber(numbers)
console.log(result)