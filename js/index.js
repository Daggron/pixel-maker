const $tableElement = $('#Canvas');
const $inputHeight = $('#inputHeight');
const $inputWidth = $('#inputWidth');
const $colorPicker = $('#colorPicker');

$('#sizePicker').submit( e => {
    e.preventDefault();

    let width = $inputWidth.val();
    let height = $inputHeight.val();

    $tableElement.html('');

    makeGrid(height, width);
    addCell();
});

function makeGrid(height, width) {
    for(let i = 0; i < height; i++) {
        $tableElement.append('<tr></tr>');
    };

    for(let i = 0; i < width; i++) {
        $('tr').append('<td></td>');
    };
};

function addCell() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    });
};
