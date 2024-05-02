//bt1
// let arr =[];
// let count =0;
// for(var i=0;i<10;i++){
//     var stt = i+1;
//     var a = +prompt("Nhap so thu "+ stt);
//     arr.push(a);
// }
// for(var i =0; i<arr.length;i++){
//     if(arr[i]>=10){
//         count++;
//     }
// }
// console.log("Co "+count+" phan tu lon hon hoac bang 10");

//bt2
// var arr =[];
// let indexarr  = 0;
// var stt = 1;
//     if(arr.length<1){
//         var a = +prompt("Nhap so thu "+ stt);
//         arr.push(a);
//     }
//     for(var i=1;i<4;i++){
//         var flag = 1;
//          stt = i +1;
//         while(flag == 1){
//             var flag2 = 1;
//             var a = +prompt("Nhap so thu "+ stt);
//             for( var j = 0; j< arr.length ; j++){
//                 if(a == arr[j]){
//                     flag2 = 0;
//                     alert("phan tu vua nhap da trung, yeu cau nhap lai");
//                     break;
//                 }
//             }
//             if(flag2 == 1){
//                 flag = 0;
//                 arr.push(a);
//             }
//         }
//     }
// let max = arr[0];
// for(var i =0; i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i];
//         indexarr = i;
//     }
// }
// console.log(arr);
// alert("Phan tu lon nhat la: "+max+", vi tri cua no la: "+indexarr);
//bt3
// var a = +prompt("Nhap so luong so nguyen ban muon nhap");
// let arr = [];
// for(var i = 0; i<a ;i++){
//     var b = +prompt("Nhap so nguyen: ");
//     arr.push(b);
// }
// let max = arr[0];
// let sum =0;
// for(var i =0; i<arr.length;i++){
//     sum += arr[i];
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// let dtb = parseFloat(sum/arr.length);
// console.log("Gia tri trung binh la: "+ dtb);
//bt4
// var a = +prompt("Nhap so luong so nguyen ban muon nhap");
// let arr = [];
// for(var i = 0; i<a ;i++){
//     var b = +prompt("Nhap so nguyen: ");
//     arr.push(b);
// }
// arr.reverse();
//bt5
// var str1 = prompt("Nhap vao 1 chuoi: ");
// var flag = 0;
// var count = 0;
// if(str1.length-1 == "-"){
//     alert("So khong hop le");
//     flag = 1;
// }
// if(flag == 0){
//     for(var i = 0; i< str1.length;i++){
//         if(str1[i] == "-" && str1[i+1] >0 && str1[i+1] <= 9 ){
//             count++;
//         }
//     }
// }

//bt6
// let arr= [];
// let flag = 1;
// for(var i=0;i<10;i++){
//     var stt = i+1;
//     var a = +prompt("Nhap so thu "+ stt);
//     arr.push(a);
// }
// var b = +prompt("Nhap phan tu so nguyen");
// for(var i =0; i<arr.length;i++){
//     if(arr[i] == b){
//         flag =0;
//         alert("Number X is in the array");
//     }
// }
// if(flag == 1){
//     alert("Number X is not in the array");
// }

//bt7
// let arr= [];
// let flag = 1;
// for(var i=0;i<10;i++){
//     var stt = i+1;
//     var a = +prompt("Nhap so thu "+ stt);
//     arr.push(a);
// }
// var b = +prompt("Nhap phan tu so nguyen");
// for(var i =0; i<arr.length;i++){
//     if(arr[i] == b){
//         arr.splice(i,1);
//         arr.push(0);
//     }
// }

//bt8
// let arr= [];
// for(var i=0;i<10;i++){
//     var stt = i+1;
//     var a = +prompt("Nhap so thu "+ stt);
//     arr.push(a);
// }
// arr.sort();
// arr.reverse();
// console.log(arr);

//bt9
// let arr= [];
// for(var i=0;i<10;i++){
//     var stt = i+1;
//     var a = +prompt("Nhap so thu "+ stt);
//     arr.push(a);
// }
// let arr1 = [];
// for(var i=0;i<10;i++){
//     var stt = i+1;
//     var a = +prompt("Nhap so thu "+ stt);
//     arr1.push(a);
// }
// let arr2 = [];
// arr2 = arr1.concat(arr);
// console.log(arr2);

