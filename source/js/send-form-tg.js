const regexNewLine = '/^s*[\r\n]/gm';

const setTelegram = {
  token: '7345767493:AAHBntzKNm71von_T2_mpModNnVs_NTi7tQ', // Your bot's token that got from @BotFather
  chatId: '-1002199521504', // The user's(that you want to send a message) telegram chat id
  url() {
    return `https://api.telegram.org/bot${this.token}/sendMessage`;
  }
};

const getUrl = setTelegram.url.bind(setTelegram);

async function sendMessage(text){
  text = text.replace(regexNewLine, '');

  const obj = {
    'parse_mode': 'html',
    'chat_id': setTelegram.chatId,
    text: text,
  };

  await fetch(getUrl(), {
    'chat_id': setTelegram.chatId,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(obj)
  });
}

export { sendMessage };
