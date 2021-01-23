$(document).ready(function() {
    $('#btn').click(function(e) {
        e.preventDefault();

        $('#textLoad').html('');

        $.ajax({
            url: 'http://api.icndb.com/jokes/random',
            type: 'get',
            dataType: 'json',

            success: function(data) {
                //console.log(data);

                let jokes = $("#textLoad");

                $.each(data, function(index, item) {
                    jokes.text(item.joke);
                });
            },
            error: function(xhr, status, error) {
                console.log(xhr);
                console.log(status);
                console.log(error);
            }
        });
    });
});