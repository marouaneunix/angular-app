import { Component, OnInit } from "@angular/core";
import { NotificationStoreService } from './services/notification-store.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  constructor(public notificationStore: NotificationStoreService) {}

}
