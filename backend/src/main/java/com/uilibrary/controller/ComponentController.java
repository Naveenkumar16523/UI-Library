package com.uilibrary.controller;

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

    @PostMapping
    public ResponseEntity<ComponentDto> createComponent(@RequestBody ComponentDto dto) {
        return ResponseEntity.ok(componentService.createComponent(dto));
    }
}
