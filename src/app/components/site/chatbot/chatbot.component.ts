import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  reception: any[] = [];
  messages: any[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(public fb: FormBuilder, private httpClient: HttpClient) { }
  chatForm: FormGroup;

  ngOnInit() {
    this.chatForm = this.fb.group({
      input: new FormControl('')
    });
  }
  get f() { return this.chatForm.controls; }

  add_to_messages() {
    this.messages.push(this.f.input.value);
    this.httpClient.get(`http://127.0.0.1:5000/${this.chatForm.get('input').value}`, this.httpOptions).subscribe(res => {
      this.reception.push(res);
    });

  }
}
