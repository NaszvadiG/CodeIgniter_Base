$(document).ready(function(){    
    $("#liberar").submit(function(event) {   

    event.preventDefault();     
//$("#liberar").ajaxForm({url: 'server.php', type: 'post'});  OU
        $.ajax({
            type:'POST',
            url:baseurl+'controller/method',
            cache:false,
            data: $(this).serialize(), // it will serialize the form data
            dataType: 'html',
            statusCode: {
                    404: function() {
                      $("body").html('Could not contact server.');
                    },
                    500: function() {
                      $("body").html('A server-side error has occurred.');
                    }
            },
            error: function() {
                $("body").html('A problem has occurred.');
            },
            success: function(html) {
                $('body').html(html);

            }
        }); //Ajax
    });//click
});//document
