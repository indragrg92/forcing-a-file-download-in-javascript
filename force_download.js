<a href="https://example.com/image.png" class="force-download" data-title="image.png">Download</a>

<script>
 $( document ).on( 'click', '.force-download', function(e) {
   e.preventDefault();
   
   const url = $( this ).attr( 'href');
   const title = $( this ).data( 'title' );
   
   var xhr = new XMLHttpRequest();
   xhr.open( 'GET', url, true );
   xhr.responseType = 'blob';
   xhr.onload = function() {
     var url_creator = window.URL || window.webkitURL;
     var image_url = url_creator.createObjectURL( this.response );
     var anchor = document.createElement( 'a' );
     anchor.href = image_url;
     anchor.download = title;
     document.body.appendChild( anchor );
     anchor.click();
     document.body.removeChild( anchor );
   };
   
   xhr.send();
 
 }); 
</script>
