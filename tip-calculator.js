function billAmount () {

    const b = document.getElementById("bill-input").value;
    const a = document.getElementById("amount-sum");


    if (b != '') {
        a.innerHTML = `${b}`;
    }
    else {
        a.innerHTML = "0.00";
    }
};

function sum (i) {

    const a = document.getElementById("amount-sum");
    const t = document.getElementById("total-amount-sum");
    const b = document.getElementById("bill-input").value;
    const n = document.getElementById("nump-input").value;

    
    if (b != '') {

        if (n == 0 || n == '') {

            const e = document.getElementById("empty");
            const nf = document.getElementById("nump-input");

            e.style.display = "inline";
            nf.style.borderColor = "red";


        }

        else {

            switch (i) {
                case "tips-button-01":
                    a.innerHTML = `${parseFloat((b*(5/100)/n)).toFixed(2)}`;
                    t.innerHTML = `${parseFloat((b/n)+(b*(5/100)/n)).toFixed(2)}`;
                    break;

                case "tips-button-02":
                    a.innerHTML = `${parseFloat((b*(10/100)/n)).toFixed(2)}`;
                    t.innerHTML = `${parseFloat((b/n)+(b*(10/100)/n)).toFixed(2)}`;
                    break;

                case "tips-button-03":
                    a.innerHTML = `${parseFloat((b*(15/100)/n)).toFixed(2)}`;
                    t.innerHTML = `${parseFloat((b/n)+(b*(15/100)/n)).toFixed(2)}`;
                    break;

                case "tips-button-04":
                    a.innerHTML = `${parseFloat((b*(20/100)/n)).toFixed(2)}`;
                    t.innerHTML = `${parseFloat((b/n)+(b*(20/100)/n)).toFixed(2)}`;
                    break;

                case "tips-button-05":
                    a.innerHTML = `${parseFloat((b*(25/100)/n)).toFixed(2)}`;
                    t.innerHTML = `${parseFloat((b/n)+(b*(25/100)/n)).toFixed(2)}`;
                    break;

            }

        }

    }
    else {
        
        a.innerHTML = "0.00";
    }

};

function csum () {

    const a = document.getElementById("amount-sum");
    const t = document.getElementById("total-amount-sum");
    const b = document.getElementById("bill-input").value;
    const n = document.getElementById("nump-input").value;

    const c = document.getElementById("tips-button-06").value;

    a.innerHTML = `${parseFloat((b*(c/100)/n)).toFixed(2)}`;
    t.innerHTML = `${parseFloat((b/n)+(b*(c/100)/n)).toFixed(2)}`;

}

function reset () {

    const am = document.getElementById("amount-sum");
    const tm = document.getElementById("total-amount-sum");

    am.innerHTML = "0.00";
    tm.innerHTML = "0.00";

    $("input").val("");

};