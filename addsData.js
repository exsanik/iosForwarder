import firebaseConfig from "./firebase.config.json" assert { type: "json" };
import appConfig from "./app.config.json" assert { type: "json" };

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js'

async function getIpAddress() {
  return new Promise((resolve => {
    fetch('https://api.ipify.org?format=json').then(resp => resp.json()).then(resolve);
  }))
}

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);

  return Array.from(params.keys()).reduce(
    (acc, val) => ({ ...acc, [val]: params.get(val) }),
    {}
  );
}

export async function createAddsData() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const { ip } = await getIpAddress()
  const queryParams = getQueryParams()
  const COLLECTION_NAME = 'ads'

  await setDoc(doc(db, COLLECTION_NAME, ip), queryParams);

  const link = document.querySelector('.link')
  link.setAttribute('href', appConfig.appStoreLink)
  link.click()
}