import { Component, OnInit } from '@angular/core';
import { Pb, ApiService } from "../api/api.service";
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-process-bar',
  templateUrl: './process-bar.component.html',
  styleUrls: ['./process-bar.component.sass'],
  animations: [
    trigger('changeWidth', [
        state('true', style({
            width: '{{newWidth}}%',
        }),  {params: {newWidth: '*'}}),
        transition('* => true', animate('1000ms ease-out')),
    ])
  ]
})

export class ProcessBarComponent implements OnInit {

  pb: Pb[];
  currentBarIndex = 0;
  dataReady = false

  constructor(private apiService: ApiService) { }

  getPb() {
    this.apiService.getPb().subscribe(result => {
      this.pb = result
      setTimeout(()=>{
          this.dataReady = true
      }, 500);
    });
 }

  ngOnInit() {
    this.getPb();
  }

  selectPb(barIndex) {
    this.currentBarIndex = barIndex
  }

  changeBarValue(value){
    //console.log('current bar: '+this.currentBarIndex)
    let currentBarValue = this.pb.bars[this.currentBarIndex]
    let newValue = currentBarValue+=value
    if(newValue < 0){
      newValue = 0
    }
    else if(newValue > this.pb.limit){
      newValue = this.pb.limit
    }
    this.pb.bars[this.currentBarIndex] = newValue
  }

  trackByFn(index) {
    return index
  }
}
