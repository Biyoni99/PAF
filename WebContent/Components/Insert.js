/**
 * 
 */

$(document).ready(function()
{
	if ($("#alertSuccess").text().trim() == "")
	{
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
});

// SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
	console.log("test");
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	
	// Form validation-------------------
	var status = validateItemForm();
	if (status != true)
	{
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	
	// If valid------------------------
	
	var type = ($("#hidItemIDSave").val() == "") ? "POST" : "PUT";
	console.log(type);
	console.log($("#formInsert").serialize());
	$.ajax(
	{
		url : "FundsAPI",
		type : type,
		data : $("#formInsert").serialize(),
		dataType : "text",
		complete : function(response, status)
		{
			onItemSaveComplete(response.responseText, status);
		}
});
	
});


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	$("#hidItemIDSave").val($(this).data("fundid"));
	$("#email").val($(this).closest("tr").find('td:eq(0)').text());
	$("#name").val($(this).closest("tr").find('td:eq(1)').text());
	$("#address").val($(this).closest("tr").find('td:eq(2)').text());
	$("#phone").val($(this).closest("tr").find('td:eq(3)').text());
	$("#des").val($(this).closest("tr").find('td:eq(4)').text());
});



// DELETE===========================================
	$(document).on("click", ".btnRemove", function(event)
	{ 
	 $.ajax( 
	 { 
	 url : "FundsAPI", 
	 type : "DELETE", 
	 data : "fundID=" + $(this).data("fundid"),
	 dataType : "text", 
	 complete : function(response, status) 
	 { 
	 onItemDeleteComplete(response.responseText, status); 
	 } 
	 }); 
});




// CLIENT-MODEL================================================================
function validateItemForm()
{
	// email
	if ($("#email").val().trim() == "")
	{
		return "Insert Email.";
	}
	// NAME
	if ($("#name").val().trim() == "")
	{
		return "Insert Name.";
	}
	
	if ($("#address").val().trim() == "")
	{
		return "Insert Address.";
	}

	// PHONE-------------------------------
	if ($("#phone").val().trim() == "")
	{
		return "Insert Phone number.";
	}
		// is numerical value
	var num = $("#phone").val().trim();
	if (!$.isNumeric(num))
	{
		return "Insert only numerical value for Phone number.";
	}
	// convert to decimal price
//	$("#phone").val(parseInteger(num).toFixed(10));
	
	// DESCRIPTION------------------------
	if ($("#des").val().trim() == "")
	{
		return "Insert Item Description.";
	}
	return true;
}


function onItemSaveComplete(response, status)
	{ 
	if (status == "success") 
	 { 
	 var resultSet = JSON.parse(response); 
	 if (resultSet.status.trim() == "success") 
	 { 
	 $("#alertSuccess").text("Successfully saved."); 
	 $("#alertSuccess").show();
	 $("#divItemsGrid").html(resultSet.data); 
	 } else if (resultSet.status.trim() == "error") 
	 { 
	 $("#alertError").text(resultSet.data); 
	 $("#alertError").show(); 
	 } 
	 } else if (status == "error") 
	 { 
	 $("#alertError").text("Error while saving."); 
	 $("#alertError").show(); 
	 } else
	 { 
	 $("#alertError").text("Unknown error while saving.."); 
	 $("#alertError").show(); 
	 } 
	 $("#hidItemIDSave").val(""); 
	 $("#formInsert")[0].reset();


}

function onItemDeleteComplete(response, status)
	{ 
	if (status == "success") 
	 { 
	 var resultSet = JSON.parse(response); 
	 if (resultSet.status.trim() == "success") 
	 { 
	 $("#alertSuccess").text("Successfully deleted."); 
	 $("#alertSuccess").show();
	 $("#divItemsGrid").html(resultSet.data); 
	 } else if (resultSet.status.trim() == "error") 
	 { 
	 $("#alertError").text(resultSet.data); 
	 $("#alertError").show(); 
	 } 
	 } else if (status == "error") 
	 { 
	 $("#alertError").text("Error while deleting."); 
	 $("#alertError").show(); 
	 } else
	 { 
	 $("#alertError").text("Unknown error while deleting.."); 
	 $("#alertError").show(); 
 } 
}







