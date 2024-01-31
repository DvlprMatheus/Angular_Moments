import { Component, OnInit } from '@angular/core';

import { MomentService } from '../../../services/moment.service';

import { Moment } from '../../../Moments';

import { environment } from '../../../../environments/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;

  faSearch = faSearch;
  searchTerm: string = "";

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
      this.momentService.getMoments().subscribe((items) => {
        const data = items.data;

        this.allMoments = data;
        this.moments = data;
      });
  }

  formateDate(date: string | undefined): string{
    if (date != undefined){
    return new Date(date).toLocaleDateString('pt-BR');
  }
    return 'Data Inválida';
  }

  search(event: Event) : void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.moments = this.allMoments.filter(moment => {
      return moment.title.toLowerCase().includes(value);
    })
  }
}