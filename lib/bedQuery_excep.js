function bedQuery_excep() {
    function bed() {
        let d = document.querySelectorAll("td");
        let re = {};
        let tag = ['th', 'div', 'span'];
        let c = 0;
        d.forEach(element => {

            let x = element.innerHTML;
            console.log(x, x.includes('負壓'));
            if (x.includes('負壓')) {
                console.log('I here!');

                try {
                    re = {
                        '總數': parseInt(element.nextElementSibling.nextElementSibling.innerText),
                        '占床數': parseInt(element.nextElementSibling.nextElementSibling.nextElementSibling.innerText),
                        '空床數': parseInt(element.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText),
                    }
                } catch {}
            }


        });

        if (re == null || c == 3) {
            let d = document.querySelectorAll(tag[c]);
            d.forEach(element => {

                let x = element.innerHTML;
                console.log(x, x.includes('負壓'));
                if (x.includes('負壓')) {
                    console.log('I here!');

                    try {
                        re = {
                            '總數': parseInt(element.nextElementSibling.nextElementSibling.innerText),
                            '占床數': parseInt(element.nextElementSibling.nextElementSibling.nextElementSibling.innerText),
                            '空床數': parseInt(element.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText),
                        }
                    } catch {}
                }


            });
            c++;
        }
        return re;
    }

    return bed();
}

module.exports = bedQuery_excep;