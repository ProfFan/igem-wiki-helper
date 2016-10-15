function readfiles(files) {
var formData = new FormData();

formData.append('file', files[0]);

formData.append('filename', 'T--SUSTech_Shenzhen--'+files[0].name);
formData.append('format','json');
formData.append('token',mw.user.tokens.get( 'editToken' ));

$.ajax({
    url: '/wiki/api.php?action=upload',
    type: 'POST',
    data: formData,
    async: true,
    success: function (data) {
        console.log(data);
        
    },
    cache: false,
    contentType: false,
    processData: false
 });


}


var dropzone = document.getElementById('wpTextbox1'); 
dropzone.ondrop = function(e){
    console.log('drop'); 
    e.preventDefault();
    readfiles(e.dataTransfer.files);
    e.dataTransfer.setData("text/plain", e.dataTransfer.files[0].name);
    var $txt = jQuery(dropzone);
        var caretPos = $txt[0].selectionStart;
        var textAreaTxt = $txt.val();
        var txtToAdd = "{{SUSTech_Image | filename=T--SUSTech_Shenzhen--"+e.dataTransfer.files[0].name+"}}";
        $txt.val(textAreaTxt.substring(0, caretPos) + txtToAdd + textAreaTxt.substring(caretPos) );
};
