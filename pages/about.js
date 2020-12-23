import { IonCard, IonCardContent, IonContent, IonPage } from "@ionic/react";
export default function AboutPage() {
  console.log("in about");
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <div>About us</div>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
