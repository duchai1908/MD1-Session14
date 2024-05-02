// bt1
// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// for (var i in a) {
//    console.log("row " + i);
//    for (var j in a[i]) {
//       console.log(" " + a[i][j]);
//    }
// }

//bt2
// let arr = ['c','s','c','2','6','1'];
// arr.reverse();
// console.log(arr);

//bt3
// let arr = [];
// var a = prompt("Nhap vao 1 chuoi ky tu");
// for(var i =0; i<a.length;i++){
//     arr.push(a[i]);
// }
// for(var i =0; i<arr.length;i++){
//     if(arr[i] >= "0" && arr[i] <= "9"){
//         console.log(arr[i]);
//     }
// }

//bt4
// var a = prompt("Nhap chuoi bat ky");
// let arr = a.split(" ");
// let count = 0;
// console.log(arr);
// for(var i = 0; i<arr.length;i++){
//     count++;
// }
// console.log(count);

//bt5
// var a = prompt("Nhap chuoi bat ky");
// let arr = a.split(" ");
// var b = prompt("Nhap chuoi bat ky");
// let arr1 = b.split(" ");
// var flag =0;
// console.log(arr);
// for(var i = 0; i<arr.length;i++){
//         if(arr[i] != arr1[i]){
//             flag = 1;
//             break;
//         }
// }
// console.log(arr1);
// if(flag == 1){
//     console.log("Khong giong nhau");
// }else{
//     console.log("Co giong");
// }

//bt6
// let arr =['c','s','-','2','-','1'];
// for(var i =0; i<arr.length;i++){
//     if(arr[i] == '-'){
//         arr.splice(i,1,'_');
//     }
// }
// console.log(arr);