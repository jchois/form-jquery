$(document).ready(function () {

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

    function valAll() {

        valName();
        valFields();
    }
    function valName() {

        var cont = 0;

        if ($('#name').val() == "") {
            cont = 1;
        }

        if (cont == 0) {
            $('#error').css("display", "none");
        } else {
            $('#error').css("display", "block");
        }
    }

    function valFields() {
        $('[id^="perc-min"]').each(function () {
            var id = $(this).attr('id').replace('perc-min','');
            
            var percMin = $(this).val();
            var percMay = $(`#perc-may${id}`).val();
            var percent = $(`[id^="percentage-${id}"]`)

            var percentEmpty = false
            var isGreaterThan100 = false
            percent.each(function(){
                if($(this).val() == '') {
                    percentEmpty = true
                }
                if($(this).val() > 100) {
                    isGreaterThan100 = true
                }
            })
            

            if ((percMin == "") || (percMay == "") || percentEmpty) {
                $(`.xclose${id}`).css("display", "block");
                $(`.xclose${id}`).html("<strong>Error!</strong> One or more of the fields are empty");
            } else {
                if (percMin >= percMay) {
                    $(`.xclose${id}`).css("display", "block");
                    $(`.xclose${id}`).html("<strong>Error!</strong> The second field of the ranges must be greater than the first");
                } else {
                    $(`.xclose${id}`).css("display", "none");
                }
                if (isGreaterThan100) {
                    $(`.xclose${id}`).css("display", "block");
                    $(`.xclose${id}`).html("<strong>Error!</strong> The range of the percentage field must be between 1-100");
                }
            }
        })

        var percMin = $('#perc-min').val();
        var percMay = $('#perc-may').val();
        var percent = $('#percentage').val();
    }
    function yearsSelect() {

        $(document.body).on('change', '.years-selector', function () {
            var years = $(this).val();
            var dataSectionId = $(this).attr("data-section");
            var id = dataSectionId.replace('section', '');

            var oldValues = [];
            $(`#${dataSectionId} .years-inputs input`).each(function () {
                oldValues.push($(this).val());
            })

            $(`#${dataSectionId} .years-inputs input`).remove();

            for (let index = 1; index <= years; index++) {
                var val = oldValues[index - 1];
                if (val === undefined) {
                    val = '';
                }
                $(`#${dataSectionId} .years-inputs`).append(`<input type="text" class="form-control input-bott" id="percentage-${id}-${index}" placeholder="Year ${index}" value=${val}>`)
            };
        })

    }

    function addBlock() {
        var addDiv = $('.form');
        var count = $(".form section").length;

        if (count >= 1) {
            $('#remove').css("display", "block");
        }

        if (count <= 3) {
            $(`<section id="section${count + 1}"> <div class="alert alert-danger xclose${count + 1}"></div><div class="info"><div class="data1"><label>Ranges</label><div class="range"><div class="input-group input-div"><input type="number" class="form-control" name="range1" id="perc-min${count + 1}"><span id="span-pru" class="input-group-addon"><i class="fa fa-percent"></i></span></div><label class="to">TO</label><div class="input-group"><input type="number" class="form-control" name="range2" id="perc-may${count + 1}"><span id="span-pru" class="input-group-addon"><i class="fa fa-percent"></i></span></div></div></div><div class="data2"> <div class="years-por"><div class="years"><label for="years-select2">Years</label> <select data-section="section${count + 1}" class="form-control years-selector" name="years${count + 1}"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option></select></div><div class="years-inputs"><label for="percentage${count + 1}">Percentage</label><input type="number" class="form-control input-bott" id="percentage-${count + 1}" placeholder="Year 1"></div></div></div></div></section>`).appendTo(addDiv);
        }

        if (count == 3) {
            $("#add").css("display", "none");
        }

    }

    function removeBlock() {
        var count = $(".form section").length

        if (count <= 4) {
            $('#add').css("display", "block");
        }

        if (count == 2) {
            $('#remove').css("display", "none");
        }
        $(".form section").last().remove();
    }

    function hideBlock() {
        $('.xclose').hide();
    }
})