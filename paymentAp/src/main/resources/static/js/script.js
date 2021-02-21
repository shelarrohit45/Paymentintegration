const payment=()=>{
	console.log("payment started ho gaya....");
	let amount = document.getElementById("paydata").value;
//	let amount=2;
	
	if(amount==" " || amount==null)
		{
		alert("enter amount");
		}
	else{
		alert("amount is "+ amount);
	    }
	console.log(amount);
	
	$.ajax({
		url:'/create_order',
		data:JSON.stringify({amount:amount,info:'order_request'}),
		contentType:'application/json',
		type:'POST',
		dataType:'json',
		success:function(response){
			console.log(response);
			if(response.status=='created')
				{
				  //open payment from....
				  let options={
					  key:'rzp_live_IhOZl6d7pPQmyH',
					  amount:response.amount,
					  currency:'INR',
					  name:'rohit technical',
					  description:'Donation',
					  image:'https://images.search.yahoo.com/images/view;_ylt=Awr9Jnkx7zBgGAQA8b.JzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2YzZGJkMWYzMDdmZGQ5YWVmYWEzZTNiMGRhZTc3YmZmBGdwb3MDMTIEaXQDYmluZw--?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dhitman%2Brohit%2Bphoto%26n%3D60%26ei%3DUTF-8%26fr%3Dmcafee%26fr2%3Dsb-top-images.search%26tab%3Dorganic%26ri%3D12&w=3378&h=2376&imgurl=img.timesnownews.com%2Fstory%2F1556623821-38E81A81-78D5-4EAD-B039-C26D059C322A.jpg&rurl=https%3A%2F%2Fwww.timesnownews.com%2Fsports%2Fcricket%2Fcricket-news%2Fphoto-gallery%2Finteresting-facts-you-must-know-about-hitman-of-indian-cricket-rohit-sharma-in-pics%2F409989&size=1166.2KB&p=hitman+rohit+photo&oid=f3dbd1f307fdd9aefaa3e3b0dae77bff&fr2=sb-top-images.search&fr=mcafee&tt=Rohit+Sharma+birthday%3A+Interesting+facts+you+must+know+about+Hitman+as+he+turns+32+-+in+pics+...&b=0&ni=160&no=12&ts=&tab=organic&sigr=EXZPSGtf_yrO&sigb=..M9HZ.go.73&sigi=_gdSyLAzysur&sigt=iQzO4.NQXKQi&.crumb=Pe2Ey4M5jfa&fr=mcafee&fr2=sb-top-images.search',
					  order_id:response.id,
					  handler: function(response){
						  console.log(response.razorpay_payment_id);
						  console.log(response.razorpay_order_id);
						  console.log(response.razorpay_signature);
						  console.log("payment success");
						  
						  swal({
							  title: "payment successfull !!",
							  text: "You clicked the button!",
							  icon: "success",
							  button: "Aww yiss!",
							});
					  },
					  prefill: { 
						  name: "", 
						  email: "",
						  contact: ""
						  },
						  
						  notes: {
							    address: "Rohit Technical" 
                                  },
								  
						 theme: {
							    color: "#3399cc"
							     },
				          };
                        let rzp=new Razorpay(options);
						rzp.on("payment.failed", function(response){
							console.log(response.error.code);         
							console.log(response.error.description);        
							console.log(response.error.source);         
							console.log(response.error.step);         
							console.log(response.error.reason);         
							console.log(response.error.metadata.order_id);         
							console.log(response.error.metadata.payment_id);
							alert("payment failed.....");
						});
						rzp.open();
								}
		},
		error:function(error){
			console.log(error);
			alert("something went wrong!!");
		}
	})
}