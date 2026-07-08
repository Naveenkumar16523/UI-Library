package com.uilibrary.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Entity
@Table(name = "components")
@Getter
@Setter
public class Component {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(unique = true, nullable = false)
    private String slug;

    @Column(nullable = false)
    private String type;

    @Column(columnDefinition = "json")
    private String dependencies;

    @Column(columnDefinition = "json")
    private String files;

    @Column(insertable = false, updatable = false)
    private LocalDateTime createdAt;
    
    @Column(insertable = false, updatable = false)
    private LocalDateTime updatedAt;
}
