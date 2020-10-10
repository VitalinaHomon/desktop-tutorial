// less than $9,875 is in the 10% bracket
// between $9,875 and $40,125 owes 12% 
// between $40,126-$85,525 owes 22% 
// between $85,526-$163,300 owes 24% 
// between $163,301-$207,350 owes 32% 
// between $207,351-$518,400 owes 35% 
// over $518,401 owes  37% 

function federaltax() {

 const bracket1 = 0.1;
 const bracket2 = 0.12;
 const bracket3 = 0.22;
 const bracket4 = 0.24;
 const bracket5 = 0.32;
 const bracket6 = 0.35;
 const bracket7 = 0.37;

 const deduction = 12400;

 const income1 = 9875;
 const income2 = 40125;
 const income3 = 85525;
 const income4 = 163300;
 const income5 = 207350;
 const income6 = 518400;

 let income = parseFloat(document.getElementById("income").value);       
 console.log(income);
 let sum = income - deduction;

 if (income <= deduction) {
     let msg = document.getElementById("output");
     msg.innerHTML = "Zarobluyai bilshe!!!!";

    } else if (sum <= income1) {
        let tax1 = sum * bracket1;
        let msg = document.getElementById("output");
        msg.innerHTML = tax1 + "$";

    } else if (sum > income1 && sum <= income2) {
        let tax1 = income1 * bracket1;
        let difference = sum - income1;
        let tax2 = difference * bracket2;
        let sumTax = tax1 + tax2;
        let msg = document.getElementById("output");
        msg.innerHTML = sumTax + "$";

    } else if (sum > income2 && sum <= income3) {
        let tax1 = income1 * bracket1;
        let tax2 = income2 * bracket2;
        let difference = sum - income1 - income2;
        let tax3 = difference * bracket3;
        let sumTax = tax1 + tax2 + tax3;
        let msg = document.getElementById("output");
        msg.innerHTML = sumTax + "$"; 

    } else if (sum > income3 && sum <= income4) {
        let tax1 = income1 * bracket1;
        let tax2 = income2 * bracket2;
        let tax3 = income3 * bracket3;
        let difference = sum - income1 - income2 -  income3;
        let tax4 = difference * bracket4;
        let sumTax = tax1 + tax2 + tax3 + tax4;
        let msg = document.getElementById("output");
        msg.innerHTML = sumTax + "$";  

    } else if (sum > income4 && sum <= income5) {
        let tax1 = income1 * bracket1;
        let tax2 = income2 * bracket2;
        let tax3 = income3 * bracket3;
        let tax4 = income4 * bracket4;
        let difference = sum - income1 - income2 -  income3 - income4;
        let tax5 = difference * bracket5;
        let sumTax = tax1 + tax2 + tax3 + tax4 + tax5;
        let msg = document.getElementById("output");
        msg.innerHTML = sumTax + "$";  

    } else if (sum > income5 && sum <= income6) {
        let tax1 = income1 * bracket1;
        let tax2 = income2 * bracket2;
        let tax3 = income3 * bracket3;
        let tax4 = income4 * bracket4;
        let tax5 = income5 * bracket5;
        let difference = sum - income1 - income2 -  income3 - income4 - income5;
        let tax6 = difference * bracket6;
        let sumTax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6;
        let msg = document.getElementById("output");
        msg.innerHTML = sumTax + "$";  

    } else if (sum > income6) {
        let tax1 = income1 * bracket1;
        let tax2 = income2 * bracket2;
        let tax3 = income3 * bracket3;
        let tax4 = income4 * bracket4;
        let tax5 = income5 * bracket5;
        let tax6 = income6 * bracket6;
        let difference = sum - income1 - income2 -  income3 - income4 - income5 - income6;
        let tax7 = difference * bracket7;
        let sumTax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6 + tax7;
        let msg = document.getElementById("output");
        msg.innerHTML = sumTax + "$";  
    }

}