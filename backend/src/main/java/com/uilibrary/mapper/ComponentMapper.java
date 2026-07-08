package com.uilibrary.mapper;

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
