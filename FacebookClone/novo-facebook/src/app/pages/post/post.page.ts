import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit{

  constructor(
    private formBuilder: FormBuilder, 
    private postService: PostService,
    private navCtrl: NavController) {}

    ngOnInit(): void {
      this.validarForm()
  
    }

  post: Post = {
    id: 0,

    post: ""
  }



formPost!: FormGroup;

  validarForm(){
    this.formPost = this.formBuilder.group({
      id: ['', [Validators.required]],
    
      post: ['', [Validators.required]]
    });


  }

  criarPost(): void{
    const body = {
      id: this.post.id,
  
      post: this.post.post
      
    };
    this.postService.create(body)
    .subscribe({
      next: (res) => {
        console.log(res);
        console.log('Post criado com sucesso')
        this.navCtrl.navigateForward('/tabs/tab1');
      },
        error: (e) => {
          console.log(e)
         // console.log("Dados Enviados", body)
        }

    })
  }

}

