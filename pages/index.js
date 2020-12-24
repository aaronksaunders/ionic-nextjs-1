import Link from "next/link";
import { useState } from "react";
import {
  IonPage,
  IonContent,
  IonButton,
  IonActionSheet,
  IonMenuButton,
  IonButtons,
  IonHeader,
  IonToolbar,
} from "@ionic/react";
import { trash, share, close } from "ionicons/icons";
export default function IndexPage() {
  const [show, setShow] = useState(false);

  const testPost = async () => {
    const resp = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ name: "Aaron", password: "pass123" }),
    });
    console.log(await resp.json());
  };
  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="ion-padding">
          <h3>Hello World - Ionic Framework with NextJS</h3>
          <div>
            Testing using the "Link" Component&nbsp;&nbsp;
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
        </div>
        <div>
          <IonButton onClick={() => setShow(true)} expand="block">
            Show Actionsheet
          </IonButton>
          <IonButton onClick={() => testPost()} expand="block">
            Post
          </IonButton>
          <IonActionSheet
            isOpen={show}
            onDidDismiss={() => setShow(false)}
            cssClass="my-custom-class"
            buttons={[
              {
                text: "Delete",
                role: "destructive",
                icon: trash,
                handler: () => {
                  console.log("Delete clicked");
                },
              },
              {
                text: "Share",
                icon: share,
                handler: () => {
                  console.log("Share clicked");
                },
              },
              {
                text: "Cancel",
                icon: close,
                role: "cancel",
                handler: () => {
                  console.log("Cancel clicked");
                },
              },
            ]}
          ></IonActionSheet>
        </div>
      </IonContent>
    </IonPage>
  );
}
