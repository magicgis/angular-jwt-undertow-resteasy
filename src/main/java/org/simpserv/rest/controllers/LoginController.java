package org.simpserv.rest.controllers;

import org.simpserv.app.AppServer;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@Path("/login")
public class LoginController implements Controller {

	public static class LoginAuth {
		private String username;
		private String password;
		private String token;

		public String getUsername() {
			return username;
		}

		public void setUsername(String username) {
			this.username = username;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public String getToken() {
			return token;
		}

		public void setToken(String token) {
			this.token = token;
		}
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public LoginAuth login(LoginAuth loginAuth ) {
		final String token = AppServer.getTokenAuthenticationService().authenticateByUsernameAndPassword(loginAuth.getUsername(), loginAuth.getPassword());
		loginAuth.setPassword("");
		loginAuth.setToken(token);
		return loginAuth;
	}
}
