import './style.css'
import appstoreBtn from '/appstore.png'
import { createAddsData } from './addsData.js'

document.querySelector('#app').innerHTML = `
  <div class="center"">
    <a class="link">
      <img src="${appstoreBtn}" />
    </a>
  </div>
`

createAddsData()
