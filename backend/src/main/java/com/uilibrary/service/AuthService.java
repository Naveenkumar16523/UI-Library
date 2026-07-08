package com.uilibrary.service;

import com.uilibrary.dto.LoginRequest;
import com.uilibrary.dto.SignupRequest;
import com.uilibrary.dto.JwtResponse;

public interface AuthService {
    JwtResponse authenticateUser(LoginRequest loginRequest);
    void registerUser(SignupRequest signUpRequest);
}
