import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

// Pascal Naming Convention
// Means first word is also capitalized
@Component({
  // Reference an element named courses
  selector: 'courses', // <course> "course"
  template: `
  <h2>{{ getTitle() }}</h2>
  <ul>
    <li *ngFor="let course of courses">
      {{ course }}
    </li>
  </ul>
  `,
})
export class CoursesComponent {
  title="List of courses"
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }

  // Logic for calling an HTTP service
}