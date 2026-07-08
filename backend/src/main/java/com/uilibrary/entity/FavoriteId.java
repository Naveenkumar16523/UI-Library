package com.uilibrary.entity;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import java.io.Serializable;

@Getter
@Setter
@EqualsAndHashCode
public class FavoriteId implements Serializable {
    private Long userId;
    private Long componentId;
}
