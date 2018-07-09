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
            $('.xclose').addClass("show");
            $('.xclose').html("<strong>Error!</strong> One or more of the fields is empty")
        }else{
        if(perc1 > perc2){
            $('.xclose').addClass("show");
            $('.xclose').html("<strong>Error!</strong> The second field of the ranges must be greater than the first")
        }else{
            $('.xclose').css("display", "none");
        }
        if(percent > 100){
            $('.xclose').addClass("show");
            $('.xclose').html("<strong>Error!</strong> The range of the percentage field must be between 1-100")
            // $('#percentage1').addClass("border-danger");
        }
        }
    }
    function yearsSelect(){

        $(document.body).on( 'change', '.years-selector', function () {
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
        var i = 1;

        if(count >= 1){
            $('#remove').addClass("show");
        }

        if(count <= 3){
            $(`<section id="section${count+1}"> <div class="alert alert-danger xclose"></div><div class="info"><div class="data1"><label>Ranges</label><div class="range"><div class="input-group input-div"><input type="number" class="form-control" name="range1" id="perc1"><span id="span-pru" class="input-group-addon"><i class="fa fa-percent"></i></span></div><label class="to">TO</label><div class="input-group">      <input type="number" class="form-control" name="range2" id="perc2"><span id="span-pru" class="input-group-addon"><i class="fa fa-percent"></i></span></div></div></div><div class="data2"> <div class="years-por"><div class="years"><label for="years-select2">Years</label> <select data-section="section${count+1}" class="form-control years-selector" name="years2"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select></div><div class="years-inputs"><label for="percentage1">Percentage</label><input type="number" class="form-control input-bott" id="percentage1" placeholder="Year 1"></div></div></div></div></section>`).appendTo(addDiv);
        }
        
        if(count == 3){
            $("#add").addClass("hide");
        }
    }

    function removeBlock(){
        var count = $(".form section").length

        if(count <= 4){
            $('#add').addClass("show");
        }
        if(count >= 2){
            $('#remove').addClass("hide");
        }

        $(".form section").last().remove();
    }

    function hideBlock(){
        $('.xclose').hide();
    }
})