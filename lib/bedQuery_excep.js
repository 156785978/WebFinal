function bedQuery_excep() {
    function bed() {
        let d = document.querySelectorAll("td");
        let re = {};
        d.forEach(element => {
            let x = element.innerText;
            console.log(x, x.startsWith('負壓'));
            if (x.startsWith('負壓')) {
                console.log('I here!');
                re = {
                    '總數': parseInt(element.nextElementSibling.nextElementSibling.innerText),
                    '占床數': parseInt(element.nextElementSibling.nextElementSibling.nextElementSibling.innerText),
                    '空床數': parseInt(element.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerText),
                }

            }
        });

        return re;
    }

    return bed();
}

module.exports = bedQuery_excep;