window.onload = function () {

    alert("Page is Loaded");

    document.getElementById('form');
    document.addEventListener("submit", event =>

        {
            event.preventDefault();
            const name = document.getElementById("name").value
            const email = document.getElementById("email").value
            const order = document.getElementById("order").value

            const html = `The order for the customer ${name}  is the following:  ${order}. The customer may be notified by email:  ${email}`
            document.getElementById('finishedOrder').innerHTML = html
        }

    )

}