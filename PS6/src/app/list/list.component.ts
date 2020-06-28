import { Component, OnInit } from '@angular/core';
import {PEOPLE} from '../data/peopleMOCK';
import {PERSON} from '../data/people';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  people: PERSON[] = PEOPLE;
  selectedPerson: PERSON;
  constructor() { }

  ngOnInit(): void {
  }

  showSummary(firstName: string) {
    this.selectedPerson = this.people.find(name => name.artist === firstName);
  }
}
