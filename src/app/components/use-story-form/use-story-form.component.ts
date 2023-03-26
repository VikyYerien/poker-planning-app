import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AOS from "aos"

@Component({
  selector: 'app-use-story-form',
  templateUrl: './use-story-form.component.html',
  styleUrls: ['./use-story-form.component.css']
})
export class UseStoryFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    AOS.init();
  }

  cancel() {
    this.router.navigate(['/user-stories-list'])
  }
}
