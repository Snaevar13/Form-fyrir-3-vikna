var is_it_true = false;
var username = "";
console.log("hello world");
$(document).ready(
  
  /* This is the function that will get executed after the DOM is fully loaded */
  function () {
  	console.log(is_it_true);
    $(function() {
       $("#From").datepicker({ dateFormat: "dd.mm.yy" }).val()
       $("#To").datepicker({ dateFormat: "dd.mm.yy" }).val()
    });
    if(is_it_true == false) {
    	$(".SubmitMessage").hide();
    	$(".LoginReplacement").hide();
    }
    else {
			 $(".hidethis").hide();
			 $(".LoginReplacement").append($("#username").val());
			 $(".LoginReplacement").show();
		}
  }
 
  
);

$(function() { 

	$("#SubmitButton").on("click", function() {
		function randomString(length, chars, numberOfAccessCode) {
			var result = '';
			for(var i = numberOfAccessCode; i > 0; --i) {
				result += "<p> ";
    			for (var j = length; j > 0; --j) {
    				result += chars[Math.round(Math.random() * (chars.length - 1))];	
    			}
    			result += " </p>";
			}
			return result;
		}

		var name = $("#Name").val();
		var numberOfAccessCode = $("#numberOfAccessCode").val();
		var From = $("#From").val();
		var To = $("#To").val();
		var email = $("#email").val();
		var email2 = $("#email2").val();
		var rString = randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', numberOfAccessCode);
		console.log(rString);
		console.log(name);
		console.log(numberOfAccessCode);
		console.log(From);
		console.log(To);
	    var string = "<p>Sæl(l) " + name + ".</p>" 
	    		     + "<p>Velkomin(n) í hóp viðskiptavina EasyPay.</p> <p>Hér eru þínir " + 
	    			 numberOfAccessCode + " aðgangskóðar sem gilda frá " + From + ", 00:00 og til " 
	    			 + To + ", 24:00</p>" +  rString;
	    console.log(string);

	    event.preventDefault();
	    $("#AppendMessage").append(email);
	    $("#SubmitButton").hide();
		$(".SubmitMessage").show();
		

		console.log("Email has been sent");
		$.ajax({
		  type: "POST",
		  url: "https://mandrillapp.com/api/1.0/messages/send.json2",
		  data: {
		    'key': 'YcudehwwhDnIi5ByYFehVw',
		    'message': {
		      'from_email': 'EasyPay@Easypay.com',
		      'to': [
		          {
		            'email': email,
		            'name': 'EasyPay',
		            'type': 'to'
		          },
		          {
		            'email': email2,
		            'name': 'EasyPay',
		            'type': 'to'
		          }
		        ],
		      'autotext': 'true',
		      'subject': 'EasyPay aðgangskóðar',
		      'html': string
		    }
		  }
		 })
	})
	$("#btnlogin").on("click", function() {
		if(is_it_true == false) {
			is_it_true = true;
			 $(".hidethis").hide();
			 $(".LoginReplacement").append("Login er í vinnslu");
			 $(".LoginReplacement").show();
			 console.log(is_it_true);
		}
	})
});