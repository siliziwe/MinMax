// $(function(){
//     var free = 10
//       , max  = 10
//       , min  = 0
//       ;
//     $('.minus').click(function(){
//         var edit = $(this).parent().find('[type="text"]').get(0)
//         if(edit.value > 0 && edit.value > min) {
//             edit.value--;
//             free++;
//         }
//         $("#textc").get(0).value = free;
//     });
//     $('.plus').click(function(){
//         var edit = $(this).parent().find('[type="text"]').get(0)
//         if(free > 0 && edit.value < max) {
//             free--;
//             edit.value++;
//         }
//         $("#textc").get(0).value = free;
//     });
//     $("#textc").get(0).value = free;
// });

var buttons = document.querySelectorAll('button[aria-controls]'),
    i;

var freePointsEl = document.getElementById('textc');
var freePoints = Number(freePointsEl.value);
var maxFreePoints = 10; // this could be abstract to use the max attribute of the input element if you wish

for (i = 0; i < buttons.length; ++i) {
    buttons[i].addEventListener('click', function (event) {
        var input = document.getElementById(this.getAttribute('aria-controls'));

        freePoints -= Number(this.value);

        if (freePoints < 0) {
            // no more free points
            // do not do anything
            freePoints = 0;
        } else if (freePoints > maxFreePoints) {
            // cannot exceed max free points when subtracting
            // do not do anything
            freePoints = maxFreePoints;
        } else {
            // we're ok, do something
            input.value = Number(input.value) + Number(this.value);
        }

        freePointsEl.value = freePoints;

    }, false);
}