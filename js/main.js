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
        valFields();
        valFields2();
        valFields3();
        valFields4();
    }
    function valName(){

        var cont = 0;
        //$('#error').css("display", "block");

        if ($('#name').val()==""){
            cont=1;
        }

        if (cont==0) {
            $('#error').css("display", "none");
        }else{
            $('#error').css("display", "block");
        }
    }
    function valFields(){
        var perc1 = $("#perc1").val();
        var perc2 = $("#perc2").val();
        var percent = $('#percentage1').val();

        if((perc1 == "") || (perc2 == "") || (percent == "")){
            $('.xclose').css("display", "block");
            $('.xclose').html("<strong>Error!</strong> One or more of the fields is empty")
        }else{
        if(perc1 > perc2){
            $('.xclose').css("display", "block");
            $('.xclose').html("<strong>Error!</strong> The second field of the ranges must be greater than the first")
        }else{
            $('.xclose').css("display", "none");
        }
        if(percent > 100){
            $('.xclose').css("display", "block");
            $('.xclose').html("<strong>Error!</strong> The range of the percentage field must be between 1-100")
            // $('#percentage1').addClass("border-danger");
        }
        }
    }
    function valFields2(){
        var perc1 = $("#perc3").val();
        var perc2 = $("#perc4").val();
        var percent = $('#percentage2').val();

        if((perc1 == "") || (perc2 == "") || (percent == "")){
            $('.xclose2').css("display", "block");
            $('.xclose2').html("<strong>Error!</strong> One or more of the fields is empty")
        }else{
        if(perc1 > perc2){
            $('.xclose2').css("display", "block");
            $('.xclose2').html("<strong>Error!</strong> The second field of the ranges must be greater than the first")
        }else{
            $('.xclose2').css("display", "none");
        }
        if(percent > 100){
            $('.xclose2').css("display", "block");
            $('.xclose2').html("<strong>Error!</strong> The range of the percentage field must be between 1-100")
        }
        }
    }
    function valFields3(){
        var perc1 = $("#perc5").val();
        var perc2 = $("#perc6").val();
        var percent = $('#percentage3').val();

        if((perc1 == "") || (perc2 == "") || (percent == "")){
            $('.xclose3').css("display", "block");
            $('.xclose3').html("<strong>Error!</strong> One or more of the fields is empty")
        }else{
        if(perc1 > perc2){
            $('.xclose3').css("display", "block");
            $('.xclose3').html("<strong>Error!</strong> The second field of the ranges must be greater than the first")
        }else{
            $('.xclose3').css("display", "none");
        }
        if(percent > 100){
            $('.xclose3').css("display", "block");
            $('.xclose3').html("<strong>Error!</strong> The range of the percentage field must be between 1-100")
        }
        }
    }
    function valFields4(){
        var perc1 = $("#perc7").val();
        var perc2 = $("#perc8").val();
        var percent = $('#percentage4').val();

        if((perc1 == "") || (perc2 == "") || (percent == "")){
            $('.xclose4').css("display", "block");
            $('.xclose4').html("<strong>Error!</strong> One or more of the fields is empty")
        }else{
        if(perc1 > perc2){
            $('.xclose4').css("display", "block");
            $('.xclose4').html("<strong>Error!</strong> The second field of the ranges must be greater than the first")
        }else{
            $('.xclose4').css("display", "none");
        }
        if(percent > 100){
            $('.xclose4').css("display", "block");
            $('.xclose4').html("<strong>Error!</strong> The range of the percentage field must be between 1-100")
        }
        }
    }
    function yearsSelect(){

        $('.years select').on('change', function() {
            var years = $(".years select").val();
            $(".years-inputs input").remove();
            
            for (let index = 1; index <= years; index++) {
                $(".years-inputs").append(`<input type="text" class="form-control input-bott" placeholder="Year ${index}">`)
            }
        })

        $('.years2 select').on('change', function() {
            var years = $(".years2 select").val();
            $(".years-inputs2 input").remove();
            
            for (let index = 1; index <= years; index++) {
                $(".years-inputs2").append(`<input type="text" class="form-control input-bott" placeholder="Year ${index}">`)
            }
        })

        $('.years3 select').on('change', function() {
            var years = $(".years3 select").val();
            $(".years-inputs3 input").remove();
            
            for (let index = 1; index <= years; index++) {
                $(".years-inputs3").append(`<input type="text" class="form-control input-bott" placeholder="Year ${index}">`)
            }
        })

        $('.years4 select').on('change', function() {
            var years = $(".years4 select").val();
            $(".years-inputs4 input").remove();
            
            for (let index = 1; index <= years; index++) {
                $(".years-inputs4").append(`<input type="text" class="form-control input-bott" placeholder="Year ${index}">`)
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