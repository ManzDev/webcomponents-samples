class Emoji extends HTMLElement {
  constructor() {
    super();
    const name = this.getAttribute('name');
    const size = this.getAttribute('size') || 16;
    const map = {
      happy: '😄',
      sad: '😞',
      angry: '😠',
      sunglasses: '😎',
      laugh: '🤣',
      wink: '😉',
      love: '😍',
      money: '🤑'
    };
    this.textContent = (name) ? map[name] : '😶';
    this.style.fontSize = `${size}px`;
  }
}

customElements.define('e-moji', Emoji);