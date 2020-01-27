import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Code } from "../models/Code";
import {
  AngularFirestoreCollection,
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class CodesService {
  codesCollection: AngularFirestoreCollection<Code>;
  codeDoc: AngularFirestoreDocument<Code>;
  codes: Observable<Code[]>;
  code: Observable<Code>;
  constructor(private db: AngularFirestore) {
    this.codesCollection = this.db.collection("codes");
  }

  getCodes(): Observable<Code[]> {
    this.codes = this.codesCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Code;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
    return this.codes;
  }

  getCode(id: string): Observable<Code> {
    this.codeDoc = this.db.doc<Code>(`codes/${id}`);
    this.code = this.codeDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Code;
          data.id = action.payload.id;
          return data;
        }
      })
    );
    return this.code;
  }

  newCode(code: Code) {
    this.codesCollection.add(code);
  }

  updateCode(code: Code) {
    this.codeDoc = this.db.doc(`codes/${code.id}`);
    this.codeDoc.update(code);
  }

  deleteCode(code: Code) {
    this.codeDoc = this.db.doc(`codes/${code.id}`);
    this.codeDoc.delete();
  }
}
