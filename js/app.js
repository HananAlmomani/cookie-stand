'use strict';

let Arr1=[];
let Arr2=['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
let total1=0;
function Cookies(name, maximum,minimum,avgCustomer){
  this.name = name;
  this.maximum= maximum;
  this.minimum=minimum;
  this.avgCustomer=avgCustomer;
  this.total = 0;
  this.arr1 = [];
  this.average=0;
}

Cookies.prototype.getavg= function(min,max){
  this.average = Math.floor(getRandomNumber(min,max)*this.avgCustomer);
};
Cookies.prototype.render=function(){
  const dataRow = document.createElement('tr');
  h.appendChild(dataRow);
  const td1El = document.createElement('td');
  dataRow.appendChild(td1El);
  td1El.textContent=this.name;
  for(let i=0;i<Arr2.length ;i++)
  {
    this.getavg(this.minimum,this.maximum);
    this.arr1.push(this.average);
    const td2El = document.createElement('td');
    dataRow.appendChild(td2El);
    td2El.textContent=this.arr1[i];
    this.total=this.total+this.arr1[i];
  }
  const td3El = document.createElement('td');
  dataRow.appendChild(td3El);
  td3El.textContent=this.total;
};

let h = document.createElement('table');
document.body.appendChild(h);
let th1El=document.createElement('th');
h.appendChild(th1El);
for (let i=0 ; i<Arr2.length;i++)
{
  const th2El = document.createElement('th');
 h.appendChild(th2El);
  th2El.textContent=Arr2[i];
}
const th3El = document.createElement('th');
h.appendChild(th3El);
th3El.textContent='Daily Location Total';
function getfooter(){

  const headerRow = document.createElement('tr');
  h.appendChild(headerRow);
  const th1El = document.createElement('td');
  headerRow.appendChild(th1El);
  th1El.textContent='           ';
  for (let i=0 ; i<=Arr2.length;i++)
  {
    const th2El = document.createElement('th');
    headerRow.appendChild(th2El);
    Arr1.push(Number(th2El) );
    total1+=Arr1[i] ;
    th2El.textContent=total1;
  }
}

const Seatle = new Cookies ('SEATLE',65,23,6.3);
const tokyo = new Cookies('TOKYO',24,3,1.2);
const Dubai = new Cookies('DUBAI',38,11,3.7);
const Paris = new Cookies('PARIS',38,20,2.3);
const Lima = new Cookies('LIMA',16,2,4.6);
Seatle.getavg(Seatle.minimum,Seatle.minimum);
Seatle.render();
tokyo.getavg(tokyo.minimum,tokyo.minimum);
tokyo.render();
Dubai.getavg(Dubai.minimum,Dubai.minimum);
Dubai.render();
Paris.getavg(Paris.minimum,Paris.minimum);
Paris.render();
Lima.getavg(Lima.minimum,Lima.minimum);
Lima.render();
getfooter();



















// const Seattle = {
//   name:'SEATTLE',
//   maximum:65,
//   minimum:23,
//   avgCustomer:6.3,
//   Arr1:[],
//   Arr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   average:0,
//   total:0,
//   getavg: function(min,max){
//     this.average = Math.floor(getRandomNumber(min,max)*this.avgCustomer);
//   },
//   render: function(){
//     const container = document.getElementById('Objects');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(let i=0; i<this.Arr2.length; i++)
//     {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       this.getavg(this.minimum,this.maximum);
//       this.Arr1.push(this.average);
//       liEl.textContent = `${this.Arr2[i]}: ${this.Arr1[i]}  cookies `;
//       this.total=this.total+this.Arr1[i];
//     }
//     const liE2 =document.createElement('li');
//     ulEl.appendChild(liE2);
//     liE2.textContent=`Total cookies : ${this.total}`;
//   }
// };
// Seattle.getavg(Seattle.minimum,Seattle.maximum);
// Seattle.render();
// const Tokyo = {
//   name:'TOKYO',
//   maximum:24,
//   minimum:3,
//   avgCustomer:1.2,
//   Arr1:[],
//   Arr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   average:0,
//   total:0,
//   getavg: function(min,max){
//     this.average = Math.floor(getRandomNumber(min,max)*this.avgCustomer);
//   },
//   render: function(){
//     const container = document.getElementById('Objects');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(let i=0; i<this.Arr2.length; i++)
//     {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       this.getavg(this.minimum,this.maximum);
//       this.Arr1.push(this.average);
//       liEl.textContent = `${this.Arr2[i]}: ${this.Arr1[i]}  cookies `;
//       this.total=this.total+this.Arr1[i];
//     }
//     const liE2 =document.createElement('li');
//     ulEl.appendChild(liE2);
//     liE2.textContent=`Total cookies : ${this.total}`;
//   }
// };

// Tokyo.getavg(Tokyo.minimum,Tokyo.maximum);
// Tokyo.render();
// const Dubai = {
//   name:'DUBAI',
//   maximum:38,
//   minimum:11,
//   avgCustomer:3.7,
//   Arr1:[],
//   Arr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   average:0,
//   total:0,
//   getavg: function(min,max){
//     this.average = Math.floor(getRandomNumber(min,max)*this.avgCustomer);
//   },
//   render: function(){
//     const container = document.getElementById('Objects');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(let i=0; i<this.Arr2.length; i++)
//     {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       this.getavg(this.minimum,this.maximum);
//       this.Arr1.push(this.average);
//       liEl.textContent = `${this.Arr2[i]}: ${this.Arr1[i]}  cookies `;
//       this.total=this.total+this.Arr1[i];
//     }
//     const liE2 =document.createElement('li');
//     ulEl.appendChild(liE2);
//     liE2.textContent=`Total cookies : ${this.total}`;
//   }
// };

// Dubai.getavg(Dubai.minimum,Dubai.maximum);
// Dubai.render();
// const Paris = {
//   name:'PARIS',
//   maximum:38,
//   minimum:20,
//   avgCustomer:2.3,
//   Arr1:[],
//   Arr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   average:0,
//   total:0,
//   getavg: function(min,max){
//     this.average = Math.floor(getRandomNumber(min,max)*this.avgCustomer);
//   },
//   render: function(){
//     const container = document.getElementById('Objects');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(let i=0; i<this.Arr2.length; i++)
//     {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       this.getavg(this.minimum,this.maximum);
//       this.Arr1.push(this.average);
//       liEl.textContent = `${this.Arr2[i]}: ${this.Arr1[i]}  cookies `;
//       this.total=this.total+this.Arr1[i];
//     }
//     const liE2 =document.createElement('li');
//     ulEl.appendChild(liE2);
//     liE2.textContent=`Total cookies : ${this.total}`;
//   }
// };

// Paris.getavg(Paris.minimum,Paris.maximum);
// Paris.render();
// const Lima = {
//   name:'LIMA',
//   maximum:16,
//   minimum:2,
//   avgCustomer:2.3,
//   Arr1:[],
//   Arr2:['6am' ,'7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   average:0,
//   total:0,
//   getavg: function(min,max){
//     this.average = Math.floor(getRandomNumber(min,max)*this.avgCustomer);
//   },
//   render: function(){
//     const container = document.getElementById('Objects');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.name;
//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(let i=0; i<this.Arr2.length; i++)
//     {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       this.getavg(this.minimum,this.maximum);
//       this.Arr1.push(this.average);
//       liEl.textContent = `${this.Arr2[i]}: ${this.Arr1[i]}  cookies `;
//       this.total=this.total+this.Arr1[i];
//     }
//     const liE2 =document.createElement('li');
//     ulEl.appendChild(liE2);
//     liE2.textContent=`Total cookies : ${this.total}`;
//   }
// };
function getRandomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Lima.getavg(Lima.minimum,Lima.maximum);
// Lima.render();
