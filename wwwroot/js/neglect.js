$(function(){
    $('.btn').on('click', function(e) {
        $('#toast').toast('dispose');
        e.preventDefault();
        {
            var count = 0;
            const r = document.querySelector('#red');
            const g = document.querySelector('#green');
            const b = document.querySelector('#blue');
        
            if(r.checked || g.checked || b.checked ) count = 1;

           if (count === 0)
            {
                $('#toast').toast({delay: 10000});
                $('#toast').toast({ autohide: false }).toast('show');   
            }           
        }

    });

    $(document).on('keyup', function(e) {
        if (e.key === "Escape") {
            $('#toast').toast('hide');
        }                  
    });   
});



