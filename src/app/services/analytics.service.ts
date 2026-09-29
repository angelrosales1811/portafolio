import { Injectable } from '@angular/core';
import {
  Firestore,
  doc,
  docData,
  increment,
  updateDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  private statsRef;

  constructor(private firestore: Firestore) {
    this.statsRef = doc(this.firestore, 'analytics', 'stats');
  }

  async track(field: string): Promise<void> {
    await updateDoc(this.statsRef, {
      [field]: increment(1),
    });
  }

  getStats() {
    return docData(this.statsRef);
  }
}
