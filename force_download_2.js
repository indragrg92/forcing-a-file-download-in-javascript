<a href="https://example.com/image.png" class="force-download" data-title="image.png">Download</a>

<script>
 $( document ).on( 'click', '.force-download', function(e) {
   e.preventDefault();
   
   const url = $( this ).attr( 'href');
   const title = $( this ).data( 'title' );
   
   var anchor = document.createElement( 'a');
   anchor.style.display = 'none';
   anchor.href = url;
   anchor.download = title;
   
   document.body.appendChild( anchor );
   anchor.click();
   anchor.remove();
 
 }); 
</script>
