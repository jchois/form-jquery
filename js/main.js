$(document).ready(function(){

    var cantSection = $(".form section").length;
    var sectionPos = 1;
    console.log(cantSection);

    //ejecute the functions
    $('.save').click(valAll);
    $('.add').click(addBlock);
    $('.remove').click(removeBlock);
    $('.equis').click(hideBlock);
    yearsSelect();

    //Functions
    function valAll(){
        
        valName();
        valRangeEmpty();
        valRange();
        valPercentEmpty();
    }

    function valName(){

        var cont = 0;
        //$('#error').css("display", "block");

        if ($('#name').val()==""){
            cont=1;
        }

        if (cont==0) {
            $('#error').css("display", "none");
            console.log('esta lleno el campo name');
        }else{
            $('#error').css("display", "block");
        }
    }

    function valRange(){
        var perc1 = $("#perc1").val();
        var perc2 = $("#perc2").val();
        var value = false;

        if(perc2 > perc1){
            value = true;
        }else{
            value = false;
            $('.xclose').css("display", "block");
            //$('.xclose').append("The second field of the ranges must be greater than the first");
            $('.xclose').html("<strong>Error!</strong> The second field of the ranges must be greater than the first")
        }
    }

    function valRangeEmpty(){
         
        var cont = 0;

        if($("#perc1").val()=="" || $("#perc2").val()==""){
            cont = 1;
        }

        if(cont==0){
            $('.xclose').css("display", "none");
        }else{
            $('.xclose').css("display", "block");
            //$('.xclose').append("One or both of the ranges fields are empty");
            $('.xclose').html("<strong>Error!</strong> One or both of the ranges fields are empty")
        }
    }

    function valPercentEmpty(){
        var cont = 0;

        if($("#percentage1").val()==""){
            cont = 1;
        }
        if (cont==0){
            $('.xclose').css("display", "none");
            console.log('esta lleno el campo percentage');
        }else{
            $('.xclose').css("display", "block");
            $('.xclose').html("<strong>Error!</strong> The percentage field is empty")
            console.log('esta vacio percentage');
        }
    }

    function yearsSelect(){

        $('select').on('change', function() {
            var years = $("select").val();
            $(".years-inputs input").remove();
            
            for (let index = 1; index <= years; index++) {
                $(".years-inputs").append(`<input type="text" placeholder="Year ${index}">`)
            }
        })
    }

    function addBlock(){

        if(sectionPos >= cantSection){
            sectionPos = 1;
        }else{
            sectionPos++;
        }

        console.log(sectionPos);

        $(".form section:nth-child(2)").fadeIn();
       // $(".form section").css("display", "block");
    }

    function removeBlock(){
        
        if(sectionPos <= 1){
            sectionPos = cantSection;
        }else{
            sectionPos--;
        }

        console.log(sectionPos);
    }

    function hideBlock(){
        $('.xclose').hide();
    }
})