import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  names = [
    'Adeola',
    "Judith",
    "Folashade",
    "Oluwaranti"
  ]
  selectedIndex = 0
  autoSlide : boolean = true;
  slideInterval : number = 1000
  constructor(private activated : ActivatedRoute) { }
  id! : number 
  ngOnInit(): void {
    // let id = parseInt(this.activated.snapshot.paramMap.get('id')!)
    // this.id = id
    this.activated.paramMap.subscribe((params:ParamMap) => {
      let insideId = parseInt(params.get('id')!)
      this.id = insideId
    })
    
      if(this.autoSlide) {
        this.slideFunction()
      }
  }
  
  slideFunction() {
    setInterval(()=> {
      this.next()
    }, this.slideInterval)
  }
  selectIndex(index : number){
    this.selectedIndex = index
  }
  prev() {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.names.length - 1
    }else {
      this.selectedIndex --
    }
  }

  next() {
    if(this.selectedIndex === this.names.length - 1) {
      this.selectedIndex = 0
    }else {
      this.selectedIndex ++
    }
  }
}
