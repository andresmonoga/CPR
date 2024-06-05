import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit {

    private flujoAgua: Subject<string> = new Subject<string>();
@Input()
 public placeholder:string ='';
 @Input()
 public initialValue: string = '';

 @Output()
 public onValue = new EventEmitter<string>();

 
 @Output()
 public onFlujo = new EventEmitter<string>();

 ngOnInit(): void {
    this.flujoAgua
    .pipe(
        debounceTime(500)
    )
    .subscribe( value =>{
        console.log('flujoAgua value', value)
    })
      
}

 emitValue( value:string ):void{
    this.onValue.emit(value);
 }

 onKeyPress(searchTerm:string){
    this.onFlujo.next(searchTerm);
  }
};