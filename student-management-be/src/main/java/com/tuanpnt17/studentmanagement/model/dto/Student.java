package com.tuanpnt17.studentmanagement.model.dto;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="Student")
@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "gender")
    private String gender;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @OneToOne
    @JoinColumn(name = "major_id")
    private Major majorId;
}
