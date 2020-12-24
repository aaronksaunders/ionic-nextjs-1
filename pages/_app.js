import {
  IonApp,
  IonMenu,
  IonItem,
  IonList,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonMenuToggle,
} from "@ionic/react";
import NoSSR from "react-no-ssr";
import Link from "next/link";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import { useState } from "react";

const Menu = () => {
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
              <IonMenuToggle>
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

const MyApp = ({ Component, pageProps }) => {
  console.log("hi");

  return (
    <NoSSR>
      <IonApp>
        <Menu />
        <Component {...pageProps} />
      </IonApp>
    </NoSSR>
  );
};

export default MyApp;
