import os

base_dir = "src/main/java/com/uilibrary"

files = {
    "repository/ComponentRepository.java": """package com.uilibrary.repository;

import com.uilibrary.entity.Component;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ComponentRepository extends JpaRepository<Component, Long> {
    Optional<Component> findBySlug(String slug);
}
""",
    "exception/GlobalExceptionHandler.java": """package com.uilibrary.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.net.URI;
import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ProblemDetail handleResourceNotFound(ResourceNotFoundException ex) {
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());
        problemDetail.setTitle("Resource Not Found");
        problemDetail.setType(URI.create("https://api.uilibrary.com/errors/not-found"));
        return problemDetail;
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ProblemDetail handleValidationExceptions(MethodArgumentNotValidException ex) {
        String errors = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(error -> error.getField() + ": " + error.getDefaultMessage())
                .collect(Collectors.joining(", "));
        
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(HttpStatus.BAD_REQUEST, errors);
        problemDetail.setTitle("Validation Error");
        problemDetail.setType(URI.create("https://api.uilibrary.com/errors/validation-error"));
        return problemDetail;
    }

    @ExceptionHandler(Exception.class)
    public ProblemDetail handleAllOtherExceptions(Exception ex) {
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(HttpStatus.INTERNAL_SERVER_ERROR, "An unexpected error occurred.");
        problemDetail.setTitle("Internal Server Error");
        problemDetail.setType(URI.create("https://api.uilibrary.com/errors/internal-error"));
        return problemDetail;
    }
}
""",
    "exception/ResourceNotFoundException.java": """package com.uilibrary.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
""",
    "service/ComponentService.java": """package com.uilibrary.service;

import com.uilibrary.dto.ComponentDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ComponentService {
    Page<ComponentDto> getAllComponents(Pageable pageable);
    ComponentDto getComponentBySlug(String slug);
}
""",
    "service/impl/ComponentServiceImpl.java": """package com.uilibrary.service.impl;

import com.uilibrary.dto.ComponentDto;
import com.uilibrary.entity.Component;
import com.uilibrary.exception.ResourceNotFoundException;
import com.uilibrary.mapper.ComponentMapper;
import com.uilibrary.repository.ComponentRepository;
import com.uilibrary.service.ComponentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ComponentServiceImpl implements ComponentService {

    @Autowired
    private ComponentRepository componentRepository;

    @Autowired
    private ComponentMapper componentMapper;

    @Override
    public Page<ComponentDto> getAllComponents(Pageable pageable) {
        return componentRepository.findAll(pageable)
                .map(componentMapper::toDto);
    }

    @Override
    public ComponentDto getComponentBySlug(String slug) {
        Component component = componentRepository.findBySlug(slug)
                .orElseThrow(() -> new ResourceNotFoundException("Component not found with slug: " + slug));
        return componentMapper.toDto(component);
    }
}
""",
    "controller/ComponentController.java": """package com.uilibrary.controller;

import com.uilibrary.dto.ComponentDto;
import com.uilibrary.service.ComponentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/components")
public class ComponentController {

    @Autowired
    private ComponentService componentService;

    @GetMapping
    public ResponseEntity<Page<ComponentDto>> getAllComponents(Pageable pageable) {
        return ResponseEntity.ok(componentService.getAllComponents(pageable));
    }

    @GetMapping("/{slug}")
    public ResponseEntity<ComponentDto> getComponentBySlug(@PathVariable String slug) {
        return ResponseEntity.ok(componentService.getComponentBySlug(slug));
    }
}
"""
}

for path, content in files.items():
    os.makedirs(os.path.dirname(f"{base_dir}/{path}"), exist_ok=True)
    with open(f"{base_dir}/{path}", "w") as f:
        f.write(content)

print("Component Service, Controller, and Global Exception Handler generated.")
