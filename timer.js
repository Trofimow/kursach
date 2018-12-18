    function start_timer()
    {
        if (timer) clearInterval(timer);
        secs = 0;
        document.getElementById('timer').innerHTML = secs + ' сек.';
        timer = setInterval(
            function () {
                secs++;
                document.getElementById('timer').innerHTML = secs + ' сек.';
            },
            1000
        );            
    }

    function stop_timer(){
        alert("Ваш результат: " + secs + "сек.");
    }
