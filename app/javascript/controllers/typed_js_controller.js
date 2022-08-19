

// Connects to data-controller="typed-js"
import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    console.log('Hello')
    new Typed(this.element, {
      strings: ["Change your life", "Watch movies"],
      typeSpeed: 50,
      loop: true
    })
  }
}
