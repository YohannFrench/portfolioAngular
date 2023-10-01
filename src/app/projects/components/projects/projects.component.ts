import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  // animations: [
  //   trigger('mySlideAnimation', [
  //     transition('before', [
  //       animate('1s', keyframes([
  //         style({scale: 0, opacity: 0, offset: 0 }), // Initial state
  //         style({scale: 0.25, opacity: 0, offset: 0.75 }),
  //         style({scale: 0.5, opacity: 1, offset: 1 })  // Final state
  //       ]))
  //     ]),
  //     transition('behind', [
  //       animate('1s', keyframes([
  //         style({scale: 0.5, opacity: 1, offset: 0 }), // Initial state
  //         style({scale: 0.25, opacity: 0, offset: 0.25 }),
  //         style({scale: 0, opacity: 0, offset: 1 })  // Final state
  //       ]))
  //     ])
  //   ])
  // ]
})
export class ProjectsComponent implements OnInit{

  projects!: Project[];
  activeIndex = 2;
  transitionState = ''; 

  ngOnInit(): void {
    this.projects = [
      {
        index: '1',
        status: 'left',
        imageUrl: 'assets/4L.png',
        description: 'My first project at school in HTML, CSS, PHP and Wampserver', 
        link: 'https://github.com/YohannFrench/Renault4L.git',
        name_link: 'GITHUB'
      },
      {
        index: '2',
        status: 'middle',
        imageUrl: 'assets/figma_img.png',
        description: 'Design of prototypes, on Figma, that allowed me to create a website for the sector of Energy & Climate in the research center.', 
        link: 'https://www.figma.com/file/Y7yeT80uNt3V2d9EUMlBkm/CENSE-Design-Prototype?node-id=0%3A1&t=L1FzeuXQSdzC9IQz-1',
        name_link: 'LINK'
      },
      {
        index: '3',
        status: 'right',
        imageUrl: 'assets/fireflylab_1.png',
        description: "Front-end and back-end of the website with Laravel, React JS, leaflet and SQL. It's the continuation of the figma designs. <br>I was like a project manager and a technical manager on this mission for my final internship. <br>", 
        link: 'https://fireflyenergylab.com/',
        name_link: 'LINK'
      },
      { 
        index: '4',
        status: 'behind',
        imageUrl: 'assets/calculator_react.png',
        description: 'A simple calculator in React JS in order to understand the different concepts of this library.', 
        link: 'https://github.com/YohannFrench/calculator',
        name_link: 'GITHUB'
      }
    ];
  }

  slideLeft(){
    this.transitionState = 'left';
    const slides = document.querySelectorAll('.slide');
    
    const nextIndex = this.activeIndex + 1 <= slides.length ? this.activeIndex + 1 : 1,
    behind = this.activeIndex - 1 >= 1 ? this.activeIndex - 1 : slides.length

    var afterNextIndex = nextIndex + 1;
    if (afterNextIndex === slides.length + 1) {
      afterNextIndex = 1;
    } else if(afterNextIndex === slides.length + 2){
      afterNextIndex = 2;
    }

    this.setAnimations(this.activeIndex,nextIndex, behind, afterNextIndex)

    this.activeIndex = nextIndex;
  }

  slideRight(){
    this.transitionState = 'right';

    const slides = document.querySelectorAll('.slide');
    
    const nextIndex = this.activeIndex - 1 >= 1 ? this.activeIndex - 1 : slides.length,
    behind = this.activeIndex + 1 <= slides.length ? this.activeIndex + 1 : 1

    var afterNextIndex = nextIndex - 1;
    if (afterNextIndex === 0) {
      afterNextIndex = slides.length;
    } else if(afterNextIndex === -1){
      afterNextIndex = slides.length - 1;
    }

    this.setAnimations(this.activeIndex,nextIndex, behind, afterNextIndex)
    
    this.activeIndex = nextIndex;
  }

  private setAnimations(activeIndex:number, nextIndex:number, behind:number, afterNextIndex:number){
    const currentSlide = document.querySelector(`[tabIndex="${activeIndex}"]`),
      nextSlide = document.querySelector(`[tabIndex="${nextIndex}"]`),
      behindSlide = document.querySelector(`[tabIndex="${behind}"]`),
      afterNextSlide = document.querySelector(`[tabIndex="${afterNextIndex}"]`);

      nextSlide ? nextSlide.slot = "middle" : '';
  
      if (behindSlide) {
        console.log("true");
        behindSlide.slot = "behind";
        behindSlide.animate([
            // Keyframes for the animation
            {scale: 0.5, opacity: 1},
            {scale: 0.25, opacity: 0},
            {scale: 0, opacity: 0}
          ], {
            // Animation duration in milliseconds
            duration: 1000,
            // Animation timing function (e.g., ease, linear)
            easing: "ease-in-out",
            // Number of iterations (1 = one time, 2 = twice, etc.)
            iterations: 1
          }
        );   
        console.log(behindSlide);
      }

    if (this.transitionState === 'left') {
      currentSlide ? currentSlide.slot = "left" : '';

      if (afterNextSlide) {
        console.log("true");
        afterNextSlide.slot = "right";
        afterNextSlide.animate([
            // Keyframes for the animation
            {scale: 0, opacity: 0},
            {scale: 0.25, opacity: 0},
            {scale: 0.5, opacity: 1}
          ], {
            // Animation duration in milliseconds
            duration: 1000,
            // Animation timing function (e.g., ease, linear)
            easing: "ease-in-out",
            // Number of iterations (1 = one time, 2 = twice, etc.)
            iterations: 1
          }
        );  
        console.log(afterNextSlide);
   
      }
    } else {
      currentSlide ? currentSlide.slot = "right" : '';
      
      if (afterNextSlide) {
        console.log("true");
        afterNextSlide.slot = "left";
        afterNextSlide.animate([
            // Keyframes for the animation
            {scale: 0, opacity: 0},
            {scale: 0.25, opacity: 0},
            {scale: 0.5, opacity: 1}
          ], {
            // Animation duration in milliseconds
            duration: 1000,
            // Animation timing function (e.g., ease, linear)
            easing: "ease-in-out",
            // Number of iterations (1 = one time, 2 = twice, etc.)
            iterations: 1
          }
        );  
        console.log(afterNextSlide);
   
      }
    }
  }
}
