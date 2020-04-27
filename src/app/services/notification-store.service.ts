import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationStoreService {

  private readonly _notifications = new BehaviorSubject<Notification[]>([]);

  readonly notifications$ = this._notifications.asObservable();

  get notifications(): Notification[] {
    return this._notifications.getValue();
  }

  set notifications(notifications: Notification[]) {
    this._notifications.next(notifications);
  }

  addNotification(notification: Notification) {
    this.notifications = [
      ...this.notifications,
      notification
    ];
  }

  removeNotification(notification: Notification) {
    this.notifications = this.notifications.filter(currentNotification => currentNotification !== notification);
  }
  constructor() { }
}

interface Notification {
  type: string;
  message: string;
}