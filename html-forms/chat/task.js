'use strict';

const botMessages = [
  'Добрый день! До свидания!',
  'Где ваша совесть?',
  'Кто тут?',
  'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
  'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
  'Мы ничего не будем вам продавать!',
  'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
];

const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.querySelector('#chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
let timeoutId;

function getMessage(message) {
  const date = new Date();

  return `<div class="message__time">
            ${date.getHours()}:${date.getMinutes()}
          </div>
          <div class="message__text">
            ${message}
          </div>`;
}

function addClientMessage(message) {
  messages.innerHTML += `
    <div class="message message_client">
      ${getMessage(message)}
    </div>
  `;
}

function addBotMessage() {
  const randomIdx = Math.floor(Math.random() * botMessages.length);

  messages.innerHTML += `
    <div class="message">
      ${getMessage(botMessages[randomIdx])}
    </div>
  `;
}

function scrollToBottom() {
  const messagesContainer = chatWidget.querySelector('.chat-widget__messages-container');
  messagesContainer.scrollTo(0, messagesContainer.scrollHeight);
}

chatWidget.addEventListener('click', (e) => {
  e.currentTarget.classList.add('chat-widget_active');
  timeoutId = setTimeout(addBotMessage, 30000);
}, { once: true });

chatWidgetInput.addEventListener('keydown', (e) => {
  clearTimeout(timeoutId);

  if (e.key === 'Enter' && e.target.value) {
    addClientMessage(e.target.value);
    e.target.value = '';

    addBotMessage();
    scrollToBottom();
  }
});
