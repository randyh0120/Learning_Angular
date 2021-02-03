import { Component } from '@angular/core';

// Pascal Naming Convention
// Means first word is also capitalized
@Component({
  // Reference an element named courses
  selector: 'courses', // <course> "course"
  template: '<h2>{{ title }}</h2>',
})
export class CoursesComponent {
  title="List of courses"
}