package com.uilibrary.dto;

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
