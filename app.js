function optsRecalc() {
    for(var i in optsGroup) {
        var sum = 0;
        var options = optsGroup[i];
        for(var j in options) {
            var option = options[j];
            if(option.sumable) {
                sum += parseInt($('[name="' + option.name + '"]:checked').val());
            }
        }
        $('[data-optsum="' + i + '"').html(sum);
    }
    console.log(sum);
}

$(function () {

    $('[data-options]').each(function () {
        var optsName = $(this).data('options');
        var options = optsGroup[optsName];

        var tpl = '';
        for(var i in options) {
            var option = options[i];
            tpl += '<h3>' + option.title + '</h3>\
                <ul>';
            for(var j in option.variants) {
                var variant = option.variants[j];
                var varId = option.name + i + '-' + j;
                tpl += '<li>\
                    <input type="radio"\
                        id="' + varId + '"\
                        name="' + option.name + '"\
                        value="' + variant.value + '"\
                        ' + (!parseInt(j) ? 'checked' : '') + '>\
                    <label for="' + varId + '">' + variant.title + '</label>';
            }
            tpl += '</ul>';
        }

        $(this).html(tpl);
    });

    $('body').on('change', '[data-options] input', function () {
        optsRecalc();
    });

    optsRecalc();

});