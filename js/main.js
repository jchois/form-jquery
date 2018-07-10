$(document).ready(function(){

    var cantSection = $(".form section").length;
    var sectionPos = 1;
    console.log(cantSection);

    //Ejecute the functions
    $('.save').click(valAll);
    $('.add').click(addBlock);
    $('.remove').click(removeBlock);
    $('.equis').click(hideBlock);
    yearsSelect();

    //Functions

    function valAll(){
        
        valName();
        valFields();
    }
    function valName(){

        var cont = 0;

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
        var percent = $('#percentage').val();

        if((perc1 == "") || (perc2 == "") || (percent == "")){
            $('.xclose').css("display", "block");
            $('.xclose').html("<strong>Error!</strong> One or more of the fields is empty")
        }else{
        if(perc1 >= perc2){
            $('.xclose').css("display", "block");
            $('.xclose').html("<strong>Error!</strong> The second field of the ranges must be greater than the first")
        }else{
            $('.xclose').css("display", "none");
        }
        if(percent > 100){
            $('.xclose').css("display", "block");
            $('.xclose').html("<strong>Error!</strong> The range of the percentage field must be between 1-100")
        }
        }
    }
    function yearsSelect(){

        $(document.body).on( 'change', '.years-selector', function(){
            var years = $(this).val();
            var dataSectionId = $(this).attr("data-section");

            $(`#${dataSectionId} .years-inputs input`).remove();
            
            for (let index = 1; index <= years; index++) {
                $(`#${dataSectionId} .years-inputs`).append(`<input type="text" class="form-control input-bott" placeholder="Year ${index}">`)
            }
        })
    }

    function addBlock(){
        var addDiv = $('.form');
        var count = $(".form section").length;

        if(count >= 1){
            $('#remove').css("display", "block");
        }

        if(count <= 3){
            $(`<section id="section${count+1}"> <div class="alert alert-danger xclose${count+1}"></div><div class="info"><div class="data1"><label>Ranges</label><div class="range"><div class="input-group input-div"><input type="number" class="form-control" name="range1" id="perc${count+1}"><span id="span-pru" class="input-group-addon"><i class="fa fa-percent"></i></span></div><label class="to">TO</label><div class="input-group">      <input type="number" class="form-control" name="range2" id="perc${count+1}"><span id="span-pru" class="input-group-addon"><i class="fa fa-percent"></i></span></div></div></div><div class="data2"> <div class="years-por"><div class="years"><label for="years-select2">Years</label> <select data-section="section${count+1}" class="form-control years-selector" name="years2"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select></div><div class="years-inputs"><label for="percentage${count+1}">Percentage</label><input type="number" class="form-control input-bott" id="percentage${count+1}" placeholder="Year 1"></div></div></div></div></section>`).appendTo(addDiv);
        }
        
        if(count == 3){
            $("#add").css("display", "none");
        }

        console.log(count);
    }

    function removeBlock(){
        var count = $(".form section").length

        console.log(count);
        if(count <= 4){
            $('#add').css("display", "block");
        }

        if(count == 2){
            $('#remove').css("display", "none");
        }
        $(".form section").last().remove();
    }

    function hideBlock(){
        $('.xclose').hide();
    }
})