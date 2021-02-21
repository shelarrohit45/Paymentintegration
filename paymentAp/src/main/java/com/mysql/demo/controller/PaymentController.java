package com.mysql.demo.controller;

import java.util.Map;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.razorpay.*;

import lombok.var;

@Controller
public class PaymentController {
	@RequestMapping("/")
	public String cl()
	{
		return "Pay";
	}
	
	    @PostMapping("/create_order")
	    @ResponseBody
		public String createOrder(@RequestBody Map<String, Object> data) throws RazorpayException
		{
	    	System.out.println(data);
	     	int amt=Integer.parseInt(data.get("amount").toString());
	     	System.out.println(amt);
	     	
	     	
			var client= new RazorpayClient("rzp_live_IhOZl6d7pPQmyH", "Dl0IkWyjiWOXnjBir7HMVEeb");
			
				JSONObject option=new JSONObject();
				option.put("amount", amt*100);
				option.put("currency", "INR");
				option.put("receipt", "txn_12345");
				Order od=client.Orders.create(option);
				System.out.println(od);
//				
			
	     	
			return od.toString();
		}
}
