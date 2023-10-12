export default class ValidateContainer {
  constructor(parentE1) {
    this.parentE1 = parentE1;

    // this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `
    <form class="form__validate">
      <input class="input__validate" placeholder="Credit card number">
      <button class="submit__validate" type="submit">Click to Validate</button>
    </form>
    `;
  }

  bindToDom() {
    this.parentE1.innerHTML = ValidateContainer.markup;
  }
}
