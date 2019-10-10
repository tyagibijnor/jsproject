$(function() { $("form[name='registration']").validate({ 
				rules: { 
					firstname: "required", 
					lastname: "required", 
					email: { 
						required: true,
						email: true 
						}, 
						password: { 
						required: true, 
						minlength: 5 } },
						messages: {
						firstname: "Please enter your firstname", 
					    lastname: "Please enter your lastname", 
					    password: { 
					    			required: "Please provide a password", 
					    		    minlength: "Your password must be at least 5 characters long" }, 
					    		   email: { 
					    		          email: "Please enter a valid email address", 
					    		          reqired: "Please enter email address" }, 
					    		   source: { 
					    		           required: "Please Enter Source " }, 
					    		           dest: { 
					    		                required: "Please enter destination to be reached " }, 
					    		                age: { 
					    		                     max: "The passenger is senior citizen. TAKE CARE!" }, 
					    		                     tnum: { 
					    		                            required: "Please enter train number to be boarded" } }, 
					    		                            submitHandler: { function(form) { form.submit(); } } }); });