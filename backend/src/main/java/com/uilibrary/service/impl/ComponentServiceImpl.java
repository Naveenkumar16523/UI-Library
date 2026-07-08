package com.uilibrary.service.impl;

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

    @Override
    public ComponentDto createComponent(ComponentDto dto) {
        Component component = componentMapper.toEntity(dto);
        component = componentRepository.save(component);
        return componentMapper.toDto(component);
    }
}
