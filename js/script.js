
var downloadImage = function(){
	html2canvas(document.body, {
	onrendered: function(canvas) {
	  var a = document.createElement('a');
	  a.href = canvas.toDataURL("image/png");
	  a.download = $.now()+'.png';
	  a.click();
	},
	allowTaint:true
	});
}

var downloadPDF = function(){
	html2canvas(document.body, {
	    onrendered: function(canvas) {
	    	/*var ctx = canvas.getContext('2d');
			ctx.clearRect( 0 , 0 , canvas.width, canvas.height );
			ctx.fillStyle="#FFFFFF";
			ctx.fillRect(0 , 0 , canvas.width, canvas.height);
			*/
	        var imgData = canvas.toDataURL("image/png");
	        var pdf = new jsPDF('p', 'mm', 'a4');
	        // window.open(imgData);
	        pdf.setProperties({
				title: 'Screenshot Application',
				creator: 'Ruchika Nagarkar'
			});
			//window.open(imgData);

	        //pdf.addImage(imgData, 'PNG', 5, 5);
	        //pdf.save($.now()+'.pdf');
	        pdf.addHTML(document.body, function() {
			  	pdf.save($.now()+'.pdf');
			});
	    }
	});
}




