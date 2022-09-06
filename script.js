

let h1_tit = document.createElement("h1")
h1_tit.innerText = 'DOM Calculator'
h1_tit.setAttribute("id", "title")
document.body.appendChild(h1_tit)

let des = document.createElement("p")
des.innerText = "Using DOM"
des.setAttribute("id", "description")
document.body.appendChild(des)

let main_table = document.createElement("div")
main_table.setAttribute("id", "main_table")
main_table.classList.add("container","mx-auto","col-lg-8","col-md-8","col-sm-8","px-4","py-4")
document.body.appendChild(main_table)

let result_bx = document.createElement("input")
result_bx.setAttribute("id", "result")
result_bx.classList.add("col-lg-5","col-sm-12","col-md-8")
main_table.appendChild(result_bx)


let tab=document.createElement("div")
tab.classList.add("table-responsive")
main_table.appendChild(tab)

let table = document.createElement("table")
table.setAttribute("id", "table")
tab.appendChild(table)


let tbody = document.createElement("tbody")
tbody.setAttribute("id", "tbody")
table.appendChild(tbody)


let row_1 = document.createElement("tr")
row_1.setAttribute("id", "row_1")
tbody.appendChild(row_1)


let td_1 = document.createElement("td")
td_1.setAttribute("id", "td_11")
row_1.appendChild(td_1)

let clear_btn = document.createElement("button")
clear_btn.setAttribute("id", "clear")
clear_btn.setAttribute("onclick", "clearScreen()")
clear_btn.classList.add("text-danger")
clear_btn.innerText = ("c")
td_1.appendChild(clear_btn)

let td_2 = document.createElement("td")
td_2.setAttribute("id", "td_2")
row_1.appendChild(td_2)


let clear_btn1 = document.createElement("button")
clear_btn1.setAttribute("id", "clear")
clear_btn1.innerText = "<"
clear_btn1.setAttribute("onclick", "one_clear()")
td_2.appendChild(clear_btn1)

let td_3 = document.createElement("td")
td_3.setAttribute("id", "td_3")
row_1.appendChild(td_3)


let dot_btn = document.createElement("button")
dot_btn.setAttribute("id", "dot")
dot_btn.innerText = "."
dot_btn.setAttribute("onclick", "show('.')")
td_3.appendChild(dot_btn)


let td_4 = document.createElement("td")
td_4.setAttribute("id", "td_4")
row_1.appendChild(td_4)


let mul_btn = document.createElement("button")
mul_btn.setAttribute("id", "mul")
mul_btn.innerText = ("*")
mul_btn.classList.add("text-primary")
mul_btn.setAttribute("onclick", "show('*')")
td_4.appendChild(mul_btn)




// row 2

let row_2 = document.createElement("tr")
row_2.setAttribute("id", "row_2")
tbody.appendChild(row_2)

let td_5 = document.createElement("td")
td_5.setAttribute("id", "td_5")
row_2.appendChild(td_5)

let btn_7 = document.createElement("button")
btn_7.setAttribute("id", "7")
btn_7.setAttribute("onclick", "show('7')")
btn_7.innerText = ("7")
td_5.appendChild(btn_7)

let td_6 = document.createElement("td")
td_6.setAttribute("id", "td_6")
row_2.appendChild(td_6)


let btn_8 = document.createElement("button")
btn_8.setAttribute("id", "8")
btn_8.setAttribute("onclick", "show('8')")
btn_8.setAttribute("class","btn_8")
btn_8.innerText = ("8")
td_6.appendChild(btn_8)


let td_7 = document.createElement("td")
td_7.setAttribute("id", "td_7")
row_2.appendChild(td_7)


let btn_9 = document.createElement("button")
btn_9.setAttribute("id", "9")
btn_9.innerText = ("9")
btn_9.setAttribute("onclick", "show('9')")
td_7.appendChild(btn_9)


let td_8 = document.createElement("td")
td_8.setAttribute("id", "td_8")
row_2.appendChild(td_8)


let divi_btn = document.createElement("button")
divi_btn.setAttribute("id", "/")
divi_btn.setAttribute("onclick", "show('/')")
divi_btn.classList.add("text-primary")
divi_btn.innerText = "/"
td_8.appendChild(divi_btn)




//row 3
let row_3= document.createElement("tr")
row_3.setAttribute("id", "row_3")
tbody.appendChild(row_3)


let td_9 = document.createElement("td")
td_9.setAttribute("id", "td_9")
row_3.appendChild(td_9)

let btn_4 = document.createElement("button")
btn_4.setAttribute("id", "4")
btn_4.setAttribute("onclick", "show('4')")
btn_4.innerText = ("4")
td_9.appendChild(btn_4)


let td_10 = document.createElement("td")
td_10.setAttribute("id", "td_10")
row_3.appendChild(td_10)

let btn_5 = document.createElement("button")
btn_5.setAttribute("id", "5")
btn_5.setAttribute("onclick", "show('5')")
btn_5.innerText = ("5")
td_10.appendChild(btn_5)


let td_11 = document.createElement("td")
td_11.setAttribute("id", "td_11")
row_3.appendChild(td_11)


let btn_6 = document.createElement("button")
btn_6.setAttribute("id", "6")
btn_6.setAttribute("onclick", "show('6')")
btn_6.innerText = "6"
td_11.appendChild(btn_6)

let td_12 = document.createElement("td")
td_12.setAttribute("id", "td_12")
row_3.appendChild(td_12)


let sub_btn = document.createElement("button")
sub_btn.setAttribute("id", "subtract")
sub_btn.setAttribute("onclick", "show('-')")
sub_btn.classList.add("text-primary")
sub_btn.innerText = "-"
td_12.appendChild(sub_btn)

/// row 4
let row_4 = document.createElement("tr")
row_4.setAttribute("id", "row_4")
tbody.appendChild(row_4)


let td_13 = document.createElement("td")
td_13.setAttribute("id", "td_13")
row_4.appendChild(td_13)

let btn_1 = document.createElement("button")
btn_1.setAttribute("id", "1")
btn_1.setAttribute("onclick", "show('1')")
btn_1.innerText = "1"
td_13.appendChild(btn_1)

let td_14 = document.createElement("td")
td_14.setAttribute("id", "td_14")
row_4.appendChild(td_14)


let btn_2 = document.createElement("button")
btn_2.setAttribute("id", "2")
btn_2.setAttribute("onclick", "show('2')")
btn_2.innerText = "2"
td_14.appendChild(btn_2)


let td_15 = document.createElement("td")
td_15.setAttribute("id", "td_15")
row_4.appendChild(td_15)

let btn_3 = document.createElement("button")
btn_3.setAttribute("id", "3")
btn_3.setAttribute("onclick", "show('3')")
btn_3.innerText = ("3")
td_15.appendChild(btn_3)

let td_16 = document.createElement("td")
td_16.setAttribute("id", "td_16")
row_4.appendChild(td_16)


let add_btn = document.createElement("button")
add_btn.setAttribute("id", "add")
add_btn.innerText = ("+")
add_btn.setAttribute("onclick", "show('+')")
add_btn.classList.add("text-primary")
td_16.appendChild(add_btn)



//row 5
let row_5 = document.createElement("tr")
row_5.setAttribute("id", "row_5")
tbody.appendChild(row_5)


let td_17 = document.createElement("td")
td_17.setAttribute("id", "td_17")
row_5.appendChild(td_17)

let btn_0 = document.createElement("button")
btn_0.setAttribute("id", "0")
btn_0.setAttribute("onclick", "show('0')")
btn_0.innerText = "0"
td_17.appendChild(btn_0)

let td_18 = document.createElement("td")
td_18.setAttribute("id", "td_2")
row_5.appendChild(td_18)


let btn_00 = document.createElement("button")
btn_00.setAttribute("id", "00")
btn_00.setAttribute("onclick", "show('00')")
btn_00.innerText = "00"
td_18.appendChild(btn_00)


let td19 = document.createElement("td")
td19.setAttribute("id", "td19")
td19.setAttribute("colspan", "2")
row_5.appendChild(td19)


let eq_btn = document.createElement("button")
eq_btn.setAttribute("id", "equal")
eq_btn.innerText = "="
eq_btn.setAttribute("onclick", "calculate()")
td19.appendChild(eq_btn)


function show(value) {
    document.getElementById("result").value += value;
   }
   function clearScreen() {
    document.getElementById("result").value="";
   }

   function one_clear(){
    document.getElementById("result").value="";
   }

   function calculate() {
    var a = document.getElementById("result").value;
    var r_val = equal(a);
    document.getElementById("result").value = r_val;
   } 
   function equal(a){
    let val=a.split('')
    if(val.includes('+')){
        let x=val.join('')
        let y=x.split('+')
        return parseInt(y[0]) + parseInt(y[1])
    }
    if(val.includes('-')){
        let x=val.join('')
        let y=x.split('-')
        return parseInt(y[0]) - parseInt(y[1])

    }
    if(val.includes('*')){
        let x=val.join('')
        let y=x.split('*')
        return parseInt(y[0]) * parseInt(y[1])

    }
    if(val.includes('/')){
        let x=val.join('')
        let y=x.split('/')
        return parseInt(y[0]) / parseInt(y[1])

    }
   }