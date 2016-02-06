/*============================================================
    Lala Alert 0.1
    By lalaman
================================

    I only made this because I was bored. But anyway, this alert plugin
    is for popping up alerts of different statuses (currently 4 right now).
    But feel free to add more if you'd like. I took the colours for Twitter's
    Bootstrap alerts (http://v4-alpha.getbootstrap.com/components/alerts/)

    I used vanilla js for this alert plugin so it should run pretty fast. Feel
    free to optimize it even more.

=============================================================*/

window.onload = function() {

    var alert_wrapper = document.getElementById("lala-alert-wrapper"),
        success_button = document.getElementById("alert-success"),
        info_button = document.getElementById("alert-info"),
        warning_button = document.getElementById("alert-warning"),
        danger_button = document.getElementById("alert-danger"),
        button_array = [success_button, info_button, warning_button, danger_button];

    //Attach listeners for all buttons
    for (var i = 0; i < button_array.length; i++) {
        button_array[i].addEventListener("click", function() {
            var message = this.getAttribute("alert-message");
            var status =this.getAttribute("alert-status");
            createAlert(message, status);
        });
    };

    /**
    * Creates an alert div element
    * @param {String} message
    * @return {Element} sum
    */
    function createAlert(message, status) {

        //Create alert element
        var alert = document.createElement("div");
        alert.className += "lala-alert ";

        //Attach correct colour to alert
        var status_class = "alert-" + status + " ";
        alert.className += status_class;

        //Create close button
        var close_button = document.createElement("span");
        close_button.className += " close-alert-x glyphicon glyphicon-remove";
        close_button.addEventListener("click", function() {
            var parent = this.parentNode;
            parent.className += " fade-out";
            if (parent.parentNode) {
                setTimeout(function() {
                    parent.parentNode.removeChild(parent)
                }, 500);
            }
        });

        //Add message and close button
        alert.innerHTML = message;
        alert.appendChild(close_button);

        //Prepend new alert to container
        alert_wrapper.insertBefore(alert, alert_wrapper.children[0]);

        setTimeout(function() {
            alert.getElementsByTagName("span")[0].click();
        }, 8000);
    };
};