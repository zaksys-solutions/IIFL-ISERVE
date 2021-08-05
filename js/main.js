
$('.selectMe').change(function () {
        $('.group').hide();
        $('#' + $(this).val()).show();
});
 
 
 /* SEND OTP Timer */
$('#OTPSetTimer').click( function() {
	$('#OTPSetTimer').text('');
	$('#OTPSetTimer').css('color', '#21D378');
	
} );
function OTPtime() {
  	//alert('Hello');
    $('.otp-sent').fadeOut('fast');
	$('.OTPSetTimer').css('color', '#4285F4');
	
}
function startTimer(){
  var counter = 30;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
        //alert('sorry, out of time');
        clearInterval(counter);
		document.getElementById("timer1").style.display='none';
		document.getElementById("OTPSetTimer").innerHTML='Resend OTP';
		document.getElementById("OTPSetTimer").style.color = "#4285F4";
		document.getElementById("OTPApply").innerHTML='Verify';
		document.getElementById("OTPApply").style.color = "#4285F4";
    }
  }, 1000);
}
function start()
{
    document.getElementById("timer1").style.display='block';
    startTimer();
	//$('#OTPSetTimer').text('OTP Sent').css('color', '#21D378');
};
function startpoptimer()
{
    //document.getElementById("timer1").style.display='block';
    startTimer();
	//$('#OTPSetTimer').text('OTP Sent').css('color', '#21D378');
};

$(".birthday").on("change", function() {
	$('.mdate-text').hide();
})

$(".birthday").click( function() {
	$('.mdate-text').hide();
})

$(".Mutual").click( function() {
	$('.Mutual').toggleClass("segselchgbg");
	$('.Mutual input').toggleClass("TickSelected");
})

$(".Derivatives").click( function() { 
	$('.Derivatives').toggleClass("segselchgbg");
	$('.Derivatives input').toggleClass("TickSelected");
})

$(".Equity").click( function() { 
	$('.Equity').toggleClass("segselchgbg");
	$('.Equity input').toggleClass("TickSelected");
})

$(".selectbank").click( function() { 
	$('datalist').addClass("styledatalist");
})



$("#nsdlredirect").click( function() { 
	$('#nsdlredirect').attr('disabled','disabled');
	//$('.redirect-message').show("");
	$('.replacetxt').text('Please wait, you will soon be redirected to the NSDL website for online signing of your application (30 secs)').removeAttr("href");
	 setTimeout(function(){ window.location.href='final.html'; }, 5000);    
});

$(".nextnsdl").click( function() { 
	$('.nextnsdl').attr('disabled','disabled');
	$('.replacetxts').text('Please wait, you will soon be redirected to the Digilocker website for verifying your address details (30 secs)');
	 setTimeout(function(){ window.location.href='digilocker_Sharing_details.html'; }, 5000);    
});

$('#focusinputclick').click(function() {
     $('#focusinput').focus();
});

$('#focusinputclick').click(function() {
     $('.focusinput').focus();
});
$('.homescreen a.button').click(function() {
     $('.mobileinput').focus();
});
$('.activeinput').click(function() {
     $('#Opaccount button').text('Resume journey');
});
 
 $(function () {
        var fileupload = $("#FileUpload1");
        var filePath = $("#spnFilePath");
        var image = $("#imgFileUpload");
        image.click(function () {
            fileupload.click();
        });
        fileupload.change(function () {
            var fileName = $(this).val().split('\\')[$(this).val().split('\\').length - 1];
            filePath.html(fileName);
        });
    }); 

$('.FileUploadClose').click(function() {
    // $('.FileUpload').hide();
	window.location.reload();
	 event.preventDefault();
});

$(".Disablebtns").click( function() { 
	$('.Disablebtns').attr('disabled','disabled');
	$('#ShowImgPath').show();
	$('.ubuttons .input-file').css('background', '#EBEBEB');
	$('.uscreens button').removeClass('disabled');
});

$('#OpenImgUpload').click(function(){ $('#imgupload').trigger('click'); });
/* Open Account Bottom */
$(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('.oaccount-fix').fadeIn(); 
        } else { 
            $('.oaccount-fix').fadeOut(); 
        } 
}); 

$(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});