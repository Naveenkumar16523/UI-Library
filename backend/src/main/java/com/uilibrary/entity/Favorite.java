package com.uilibrary.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;
import java.io.Serializable;

@Entity
@Table(name = "favorites")
@Getter
@Setter
@IdClass(FavoriteId.class)
public class Favorite {
    @Id
    @Column(name = "user_id")
    private Long userId;

    @Id
    @Column(name = "component_id")
    private Long componentId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "component_id", insertable = false, updatable = false)
    private Component component;

    @Column(insertable = false, updatable = false)
    private LocalDateTime createdAt;
}
