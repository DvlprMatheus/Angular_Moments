import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';

import { Moment } from '../../../Moments';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrl: './edit-moment.component.css'
})
export class EditMomentComponent implements OnInit{
  moment! : Moment
  btnText: string = 'Editar';

  constructor(
    private momentService: MomentService,
    private messagesService: MessagesService,
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get("id"));

      this.momentService.getMoment(id).subscribe((item) => {
        this.moment = item.data;
      });
  }

  async editHandler(momentData : Moment) {
    const id = this.moment.id

    const formData = new FormData()

    formData.append('title', momentData.title)
    formData.append('description', momentData.description)

    if(momentData.image) {
      formData.append('image', momentData.image)
    }

    await this.momentService.updateMoment(id!, formData).subscribe();

    this.messagesService.add(`O post foi atualizado com sucesso!`);

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 10);
  }
}