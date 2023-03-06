import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detale-actividad',
  templateUrl: './detale-actividad.page.html',
  styleUrls: ['./detale-actividad.page.scss'],
})
export class DetaleActividadPage implements OnInit {
  cards = [
    {
      nombre: 'VicWithGG',
      fecha: '00/00/00',
      descripcion:
        'Describir el objetivo de la tutoría deportiva, cultural o grupal.',
      imgTuto: 'assets/img/cultural.jpg',
      imgAutor: 'assets/img/imgAutor.jpg',
      likes: 15,
      dislikes: 2,
      comments: 7,
      shared: 5,
    },
    {
      nombre: 'VicWithFastGG',
      fecha: '00/00/00',
      descripcion:
        'Describir el objetivo de la tutoría deportiva, cultural o grupal.',
      imgTuto: 'assets/img/cultural.jpg',
      imgAutor: 'assets/img/imgAutor.jpg',
      likes: 15,
      dislikes: 10,
      comments: 7,
      shared: 5,
    },
    {
      nombre: 'VicWithFastGG',
      fecha: '00/00/00',
      descripcion:
        'Describir el objetivo de la tutoría deportiva, cultural o grupal.',
      imgTuto: 'assets/img/cultural.jpg',
      imgAutor: 'assets/img/imgAutor.jpg',
      likes: 15,
      dislikes: 2,
      comments: 7,
      shared: 5,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
