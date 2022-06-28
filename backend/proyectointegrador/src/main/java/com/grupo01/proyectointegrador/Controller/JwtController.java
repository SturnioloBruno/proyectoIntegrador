package com.grupo01.proyectointegrador.Controller;

import com.grupo01.proyectointegrador.Exception.NotAcceptableException;
import com.grupo01.proyectointegrador.Jwt.JwtUtil;
import com.grupo01.proyectointegrador.Model.AuthenticationRequest;
import com.grupo01.proyectointegrador.Model.AuthenticationResponse;
import com.grupo01.proyectointegrador.Service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/authenticate")
public class JwtController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping()
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword()));

        }catch (BadCredentialsException e) {
            throw new Exception("Incorrect", e);
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getEmail());

        if(userDetails.getUsername().equals("NotAccountConfirmation")){
            throw new NotAcceptableException("Cuenta no confirmada");
        }

        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new AuthenticationResponse((jwt)));
    }
}
