//bt1
// let animal = ["Lion","Tiger","Wolf","Kangaroo"];
// console.log(animal.toString());
//bt2
// var a = prompt("nhap day so");
// let b =[];
// let c = [];
// b = a.split('');
// c.push(b[0]);
// for(var i = 1; i<b.length;i++){   
//     if(b[i] %2==0 && b[i-1] %2 ==0){
//         c.push("-");
//         c.push(b[i]);
//     }else{
//         c.push(b[i]);
//     }
// }
// console.log(c);
//bt3
// var a = 'Keep Calm And Code On';
// let b =[];

// for(var i = 0;i<a.length;i++){
    
//     if(a[i] >='a' && a[i] <='z'){
//         b.push(a[i].toUpperCase());
//     }
//     else if(a[i]>='A' && a[i] <='Z'){
//         b.push(a[i].toLocaleLowerCase());
//     }else{
//         b.push(a[i]);
//     }
// }
// var c = b.join('');
// console.log(c);
//bt4
// var a = prompt("Nhap tu can tim");
// var Eng1 =[
//             ["Hello","Xin Chao"],
//             ["Age","Tuoi"],
//             ["Color","Mau Sac"]
//         ];
// for(let i = 0;i<Eng1.length;i++){
//     if(a == Eng1[i][0]){
//         console.log(Eng1[i][1]);
//         break;
//     }
// }
// if(count==0){
//     console.log("K tim thay");
// }
//bt5
// const todoList=["Go to bed at 11pm","Do homework at 9pm"];
// var flag = 1;
// do{
//     var a = prompt("Nhap chu cai");
//     switch (a){
//         case "C":{
//             var createTD = prompt("Nhap Todo moi");
//             todoList.push(createTD);
//             for(var i = 0; i<todoList.length;i++){
//                 var stt = i+1;
//                 console.log(stt+"."+todoList[i]);
//             }
//             break;
//         }
//         case "R":{
//             for(var i = 0; i<todoList.length;i++){
//                 var stt = i+1;
//                 console.log(stt+"."+todoList[i]);
//             }
//             break;
//         }
//         case "U":{
//             var a = prompt("Ban muon thay the list nao");
//             var b = prompt("Noi dung ban muon thay doi: ");
//             todoList.fill(b,a-1,a);
//             for(var i = 0; i<todoList.length;i++){
//                 var stt = i+1;
//                 console.log(stt+"."+todoList[i]);
//             }
//             break;
//         }
//         case "D":{
//             var a = prompt("Ban muon xoa list nao");
//             todoList.splice(a-1,1);
//             for(var i = 0; i<todoList.length;i++){
//                 var stt = i+1;
//                 console.log(stt+"."+todoList[i]);
//             }
//             break;
//         }
//         default: {
//                 alert("Nhap sai r ");
//                 flag = 1;
//         }
       
//     }
//     var q = prompt("Ban co muon  thoat khong(Y/N)");
//     if (q==="Y"){
//         flag = 0;
//     }
// }while(flag==1)

