package com;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import model.Funding;

/**
 * Servlet implementation class FundsAPI
 */
@WebServlet("/FundsAPI")
public class FundsAPI extends HttpServlet {
	
	Funding funds = new Funding();
	
	
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 
		String output = funds.insertProj(request.getParameter("email"),
				request.getParameter("name"),
				request.getParameter("address"),
				request.getParameter("phone"),
				request.getParameter("des"));
		
		response.getWriter().write(output);
	}
	
	//convert request parameters to a map
	private static Map getParasMap(HttpServletRequest request) {
		
		Map<String , String> map = new HashMap<String,String>();
		try
		{
			//String param = "";
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ?
			scanner.useDelimiter("\\A").next() : "";
			scanner.close();
			String[] params = queryString.split("&");
			for (String param: params)
			{
				String[] p = param.split("=");
				map.put(p[0], p[1]);
			}
		}catch (Exception e)
		{
			
		}
		return map;
		
	}
	

	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map paras = getParasMap(request);
		
		String output = funds.updateProj(paras.get("hidItemIDSave").toString(),
				paras.get("email").toString(),
				paras.get("name").toString(),
				paras.get("address").toString(),
				paras.get("phone").toString(),
				paras.get("des").toString());
		
		response.getWriter().write(output);
		
	}

	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map paras = getParasMap(request);
		
		String output = funds.deleteProj(paras.get("fundID").toString());
		
		response.getWriter().write(output);
	}

}
