import os

base_pkg = "com.uilibrary"
base_dir = "src/main/java/com/uilibrary"

entities = {
    "User": """package com.uilibrary.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "users")
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    private String passwordHash;

    @Column(unique = true)
    private String githubId;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles;

    @Column(insertable = false, updatable = false)
    private LocalDateTime createdAt;
    
    @Column(insertable = false, updatable = false)
    private LocalDateTime updatedAt;
}
""",
    "Role": """package com.uilibrary.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "roles")
@Getter
@Setter
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String name;
}
""",
    "Component": """package com.uilibrary.entity;

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
""",
    "Favorite": """package com.uilibrary.entity;

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
""",
    "FavoriteId": """package com.uilibrary.entity;

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
"""
}

repositories = {
    "UserRepository": "User",
    "RoleRepository": "Role",
    "ComponentRepository": "Component",
    "FavoriteRepository": "Favorite"
}

os.makedirs(f"{base_dir}/entity", exist_ok=True)
os.makedirs(f"{base_dir}/repository", exist_ok=True)

for name, content in entities.items():
    with open(f"{base_dir}/entity/{name}.java", "w") as f:
        f.write(content)

for repo, entity in repositories.items():
    content = f"""package {base_pkg}.repository;

import {base_pkg}.entity.{entity};
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface {repo} extends JpaRepository<{entity}, """ + ("Long" if entity != "Favorite" else "com.uilibrary.entity.FavoriteId") + """> {
}
"""
    with open(f"{base_dir}/repository/{repo}.java", "w") as f:
        f.write(content)

print("Entities and Repositories generated.")
