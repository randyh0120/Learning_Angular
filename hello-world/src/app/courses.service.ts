import { Component } from "@angular/core";

// Servcies are a plain TS class
export class CoursesService {
  getCourses() {
    return ["course1", "course2", "course3"]
  }
}