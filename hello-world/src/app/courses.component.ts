import { Component } from '@angular/core';

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
  courses = ["course1", "course2", "course3"]

  getTitle() {
    return this.title;
  }
}