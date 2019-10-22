$(document).ready(function () {
    var id = $("#marque").val();
    $("#marque").change(function () {
        $.ajax({
            url: 'MachineByMarqueController',
            data: {m: id},
            type: 'POST',
            success: function (data) {
                 console.log(data);
                var d = JSON.parse(data);

                for (var i = 0; i < d.length; i++) {
                    console.log(d[i].reference);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
            }
        });
    });


});

