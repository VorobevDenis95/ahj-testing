export default class Card {
  constructor(card) {
    this.card = card;
    this.card.innerHTML = this.renderItemCard(card);
  }

  renderItemCard(card) {
    const itemHtml = `<li class="card__item ${card}">${card}</li>`;
    this.card.insertAdjacentHTML('beforeend', itemHtml);
  }
}
