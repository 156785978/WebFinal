function bedQuery() {
    function bed() {
        let d = document.querySelectorAll("td");
        let re = {};
        let judge = false;
        d.forEach(element => {

            let x = element.innerHTML;
            console.log(x, x.includes('負壓'));

            if (x.includes('負壓')) {
                console.log('I here!');
                judge = true;
                try {
                    re = {
                        '總數': parseInt(element.nextElementSibling.innerText),
                        '占床數': parseInt(element.nextElementSibling.nextElementSibling.innerText),
                        '空床數': parseInt(element.nextElementSibling.nextElementSibling.nextElementSibling.innerText),
                    }
                } catch {}

            }

        });


        return re;
    }

    return bed();
}

module.exports = bedQuery;