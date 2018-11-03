export default class HTMLCalendar extends HTMLElement {
  
  constructor() {
    super();
    
    this.month = this.getAttribute('month') || new Date().getMonth() + 1;   // Month human readable (1-12)
    this.year = this.getAttribute('year') || new Date().getFullYear();      // Year: XXXX
    this.lastDay = new Date(this.year, this.month, 0).getDate();            // Last day of month: (28-31)
    this.firstDay = new Date(this.year, this.month - 1, 1).getDay();        // Weekday of first day: (0-6)
    this.today = this.getAttribute('today') || new Date().getDate();        // Today number

    this.classList.add('htmlcalendar');
    this.createHeader();
    this.createOffset();
    this.createDays();
    this.setToday();
  }
  
  createHeader() {
    const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    this.innerHTML += `<div class="month">${MESES[this.month-1]}</div>`;    
  }
  
  createOffset() {
    const num = (this.firstDay > 0) ? this.firstDay - 1 : 6;
    for (let i = 0; i < num; i++) 
      this.innerHTML += '<div class="offset"></div>';
  }
  
  createDays() {
    for (let i = 0; i < this.lastDay; i++) {
      const classes = ['day'];
      const WDAYS = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
      const weekday = new Date(this.year, this.month - 1, i+1).getDay();
      if (weekday == 0)
        classes.push('sunday');
      this.innerHTML += `<div class="${classes.join(' ')}" data-day="${i+1}">${WDAYS[weekday]}${i+1}</div>`;
    }
  }

  setToday() {
    this.querySelector(`.day[data-day="${this.today}"]`).classList.add('today');
  }
  
}

customElements.define('html-calendar', HTMLCalendar);