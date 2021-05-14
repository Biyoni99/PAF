<%@ page import = "model.Funding" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>


<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/Insert.js"></script>

</head>
<body>

<div class="container"><div class="row"><div class="col-6">

<h1>Funding Project Management</h1>

<form id="formInsert" name="formInsert">
	
	Email: <input id="email" name="email" type="text" class="form-control form-control-sm"><br><br>
	
	Name: <input id="name" name="name" type="text" class="form-control form-control-sm"><br><br>
	
	Address: <input id="address" name="address" type="text" class="form-control form-control-sm"><br><br>
	
	Phone: <input id="phone" name="phone" type="number" class="form-control form-control-sm" ><br><br>
	
	Description: <input id="des" name="des" type="text" class="form-control form-control-sm"><br><br>
	
	<input id="btnSave" name="btnSubmit" type="button" value="Save" class="btn btn-primary"><br><br>
	
	<input type="hidden" id="hidItemIDSave" name="hidItemIDSave" value="">
	
</form>

<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>


<br>
<div id="divItemsGrid">

<%
	Funding funds = new Funding();
	out.print(funds.readfunds());

%>
</div>
</div> </div> </div>

</body>
</html>