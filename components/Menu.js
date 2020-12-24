import {
  IonMenu,
  IonItem,
  IonList,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonMenuToggle,
} from "@ionic/react";
import Link from "next/link";

export const Menu = () => {
  return (
    <IonMenu side="start" content-id="main-content">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {["home", "settings", "about"].map((e) => {
            return (
              <IonMenuToggle key={e}>
                <Link href={e == "home" ? "/" : e}>
                  <IonItem button>
                    <span style={{ textTransform: "capitalize" }}>{e}</span>
                  </IonItem>
                </Link>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
