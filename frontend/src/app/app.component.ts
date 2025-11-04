import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Application';
  backendMessage = '';
  echoResponse = '';
  statusInfo: any = null;
  userMessage = '';
  loading = false;
  error = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadBackendStatus();
  }

  loadBackendStatus() {
    this.loading = true;
    this.error = '';

    this.apiService.getStatus().subscribe({
      next: (data) => {
        this.statusInfo = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to connect to backend. Make sure Spring Boot is running on port 8080.';
        this.loading = false;
        console.error('Error:', err);
      }
    });
  }

  testConnection() {
    this.loading = true;
    this.error = '';

    this.apiService.getHello().subscribe({
      next: (data) => {
        this.backendMessage = data.message;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to connect to backend. Make sure Spring Boot is running on port 8080.';
        this.loading = false;
        console.error('Error:', err);
      }
    });
  }

  sendMessage() {
    if (!this.userMessage.trim()) {
      return;
    }

    this.loading = true;
    this.error = '';

    this.apiService.sendMessage(this.userMessage).subscribe({
      next: (data) => {
        this.echoResponse = data.echo;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to send message to backend. Make sure Spring Boot is running on port 8080.';
        this.loading = false;
        console.error('Error:', err);
      }
    });
  }
}
