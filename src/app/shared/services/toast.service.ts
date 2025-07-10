import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  id: string;
  title: string;
  description?: string;
  duration?: number;
  type?: 'success' | 'error' | 'warning' | 'info';
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  public toasts$ = this.toastsSubject.asObservable();

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  toast(options: Omit<Toast, 'id'>): void {
    const toast: Toast = {
      id: this.generateId(),
      duration: 5000,
      type: 'info',
      ...options
    };

    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next([...currentToasts, toast]);

    // Auto remove toast after duration
    if (toast.duration && toast.duration > 0) {
      setTimeout(() => {
        this.removeToast(toast.id);
      }, toast.duration);
    }
  }

  removeToast(id: string): void {
    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next(currentToasts.filter(toast => toast.id !== id));
  }

  success(title: string, description?: string): void {
    this.toast({ title, description, type: 'success' });
  }

  error(title: string, description?: string): void {
    this.toast({ title, description, type: 'error' });
  }

  warning(title: string, description?: string): void {
    this.toast({ title, description, type: 'warning' });
  }

  info(title: string, description?: string): void {
    this.toast({ title, description, type: 'info' });
  }
}