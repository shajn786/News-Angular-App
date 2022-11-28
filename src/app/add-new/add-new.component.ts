import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent {

  id=""
  name=""
  author=""
  title=""
  description=""
  url=""
  urlToImage=""
  publishedAt=""
  content=""

  readvalues=()=>

{
  let data :any ={"id":this.id,
  "name":this.name,
  "author":this.author,
  "title":this.title,
  "description":this.description,
  "url":this.url,
  "urlToImage":this.urlToImage,
  "publishedAt":this.publishedAt,
  "content":this.content
  }
  console.log(data)


}

}
