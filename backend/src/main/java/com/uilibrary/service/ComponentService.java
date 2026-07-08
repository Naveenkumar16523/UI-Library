package com.uilibrary.service;

import com.uilibrary.dto.ComponentDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ComponentService {
    Page<ComponentDto> getAllComponents(Pageable pageable);
    ComponentDto getComponentBySlug(String slug);
    ComponentDto createComponent(ComponentDto dto);
}
