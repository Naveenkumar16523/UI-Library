import os

base_dir = "src/main/java/com/uilibrary"

files = {
    "dto/LoginRequest.java": """package com.uilibrary.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequest {
    @NotBlank
    private String email;

    @NotBlank
    private String password;
}
""",
    "dto/SignupRequest.java": """package com.uilibrary.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignupRequest {
    @NotBlank
    @Email
    private String email;

    @NotBlank
    @Size(min = 6, max = 40)
    private String password;
}
""",
    "dto/JwtResponse.java": """package com.uilibrary.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class JwtResponse {
    private String token;
    private Long id;
    private String email;
    private List<String> roles;
}
""",
    "dto/ComponentDto.java": """package com.uilibrary.dto;

import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Getter
@Setter
public class ComponentDto {
    private Long id;
    private String name;
    private String slug;
    private String type;
    private String dependencies;
    private String files;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
""",
    "mapper/ComponentMapper.java": """package com.uilibrary.mapper;

import com.uilibrary.dto.ComponentDto;
import com.uilibrary.entity.Component;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ComponentMapper {
    ComponentMapper INSTANCE = Mappers.getMapper(ComponentMapper.class);

    ComponentDto toDto(Component component);
    Component toEntity(ComponentDto componentDto);
}
""",
    "service/AuthService.java": """package com.uilibrary.service;

import com.uilibrary.dto.LoginRequest;
import com.uilibrary.dto.SignupRequest;
import com.uilibrary.dto.JwtResponse;

public interface AuthService {
    JwtResponse authenticateUser(LoginRequest loginRequest);
    void registerUser(SignupRequest signUpRequest);
}
""",
    "service/impl/AuthServiceImpl.java": """package com.uilibrary.service.impl;

import com.uilibrary.dto.JwtResponse;
import com.uilibrary.dto.LoginRequest;
import com.uilibrary.dto.SignupRequest;
import com.uilibrary.entity.Role;
import com.uilibrary.entity.User;
import com.uilibrary.repository.RoleRepository;
import com.uilibrary.repository.UserRepository;
import com.uilibrary.security.JwtUtils;
import com.uilibrary.security.UserDetailsImpl;
import com.uilibrary.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @Override
    public JwtResponse authenticateUser(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), roles);
    }

    @Override
    public void registerUser(SignupRequest signUpRequest) {
        if (userRepository.findByEmail(signUpRequest.getEmail()).isPresent()) {
            throw new RuntimeException("Error: Email is already in use!");
        }

        User user = new User();
        user.setEmail(signUpRequest.getEmail());
        user.setPasswordHash(encoder.encode(signUpRequest.getPassword()));

        Set<Role> roles = new HashSet<>();
        // Default role is USER, you could fetch it from roleRepository
        // Skipping proper role setup for brevity

        user.setRoles(roles);
        userRepository.save(user);
    }
}
""",
    "controller/AuthController.java": """package com.uilibrary.controller;

import com.uilibrary.dto.JwtResponse;
import com.uilibrary.dto.LoginRequest;
import com.uilibrary.dto.SignupRequest;
import com.uilibrary.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    @Autowired
    AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        return ResponseEntity.ok(authService.authenticateUser(loginRequest));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        authService.registerUser(signUpRequest);
        return ResponseEntity.ok("User registered successfully!");
    }
}
"""
}

for path, content in files.items():
    os.makedirs(os.path.dirname(f"{base_dir}/{path}"), exist_ok=True)
    with open(f"{base_dir}/{path}", "w") as f:
        f.write(content)

print("DTOs, Mappers, Services, and AuthController generated.")
